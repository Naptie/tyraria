import { Buffer } from "buffer";

// shz.al API base URL
const PASTEBIN_API = "https://shz.al";

/**
 * Upload workspace content to pastebin
 * @param {import('./types.js').WorkspaceData} workspaceData 
 * @returns {Promise<string | null>} Paste ID or null if failed
 */
export async function uploadWorkspace(workspaceData) {
  try {
    if (!workspaceData || !workspaceData.files || Object.keys(workspaceData.files).length === 0) {
      console.warn("No content to upload");
      return null;
    }

    const content = JSON.stringify(workspaceData, null, 2);
    const formData = new FormData();
    formData.append("c", content);
    
    const response = await fetch(PASTEBIN_API, {
      method: "POST",
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    if (result.url) {
      return result.url.split("/").pop() ?? null;
    }
    return null;
  } catch (error) {
    console.error("Error uploading workspace:", error);
    return null;
  }
}

/**
 * Load workspace content from pastebin
 * @param {string} pasteId 
 * @returns {Promise<import('./types.js').FileData[] | null>}
 */
export async function loadWorkspace(pasteId) {
  try {
    const response = await fetch(`${PASTEBIN_API}/${pasteId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonText = await response.text();
    const data = JSON.parse(jsonText);

    if (!data.files || typeof data.files !== "object") {
      throw new Error("Invalid JSON format: missing files object");
    }
    
    const fileList = Object.entries(data.files)
      .map(([filePath, base64Content]) => {
        try {
          const fileContent = new Uint8Array(
            Buffer.from(base64Content, "base64")
          );
          return {
            data: fileContent,
            path: filePath,
          };
        } catch (error) {
          console.warn(`Failed to restore file ${filePath}:`, error);
          return null;
        }
      })
      .filter((item) => item !== null);
      
    return fileList;
  } catch (error) {
    console.error("Error loading workspace:", error);
    return null;
  }
}

/**
 * Export workspace as JSON string
 * @param {import('./types.js').FileData[]} files 
 * @returns {string}
 */
export function exportWorkspaceAsJSON(files) {
  const filesObject = {};
  
  for (const file of files) {
    const base64Content = Buffer.from(file.data).toString("base64");
    filesObject[file.path] = base64Content;
  }
  
  return JSON.stringify({
    files: filesObject
  }, null, 2);
}