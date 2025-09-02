/**
 * Utility functions for handling file content formats
 */
import { Buffer } from 'buffer';

// Common text file extensions
const TEXT_FILE_EXTENSIONS = new Set([
  '.txt',
  '.md',
  '.typ',
  '.js',
  '.ts',
  '.jsx',
  '.tsx',
  '.json',
  '.html',
  '.htm',
  '.css',
  '.scss',
  '.sass',
  '.less',
  '.svg',
  '.xml',
  '.yaml',
  '.yml',
  '.toml',
  '.ini',
  '.py',
  '.rs',
  '.go',
  '.c',
  '.cpp',
  '.h',
  '.hpp',
  '.java',
  '.kt',
  '.swift',
  '.rb',
  '.php',
  '.sh',
  '.bat',
  '.ps1',
  '.sql',
  '.r',
  '.scala',
  '.clj',
  '.hs',
  '.elm',
  '.dart',
  '.vue',
  '.astro',
  '.svelte',
  '.lua',
  '.pl',
  '.tcl',
  '.vim',
  '.emacs',
  '.gitignore',
  '.gitattributes',
  '.editorconfig',
  '.dockerfile',
  '.makefile',
  '.cmake',
  '.gradle',
  '.properties',
  '.conf',
  '.cfg',
  '.log',
  '.tex',
  '.bib',
  '.csv',
  '.tsv',
  '.jsonl',
  '.ndjson',
  '.graphql',
  '.gql',
  '.proto',
  '.thrift',
  '.avsc',
  '.schema',
  '.xsd',
  '.rdf',
  '.ttl',
  '.n3',
  '.nt',
  '.nq',
  '.trig',
  '.sparql',
  '.owl',
  '.jsonld',
  '.mustache',
  '.hbs',
  '.handlebars',
  '.jinja',
  '.j2',
  '.twig',
  '.liquid',
  '.ftl',
  '.vm',
  '.erb',
  '.asp',
  '.aspx',
  '.jsp',
  '.jspx',
  '.cshtml',
  '.vbhtml',
  '.razor',
  '.blade',
  '.tpl',
  '.smarty',
  '.pug',
  '.jade',
  '.slim',
  '.haml',
  '.ejs',
  '.eta',
  '.nunjucks'
]);

/**
 * Check if a file is likely a text file based on its extension
 */
export function isTextFile(filePath: string): boolean {
  const extension = getFileExtension(filePath);
  return TEXT_FILE_EXTENSIONS.has(extension);
}

/**
 * Get file extension from path
 */
function getFileExtension(filePath: string): string {
  const lastDot = filePath.lastIndexOf('.');
  const lastSlash = Math.max(filePath.lastIndexOf('/'), filePath.lastIndexOf('\\'));

  if (lastDot === -1 || lastDot < lastSlash) {
    return '';
  }

  return filePath.substring(lastDot).toLowerCase();
}

/**
 * Check if content appears to be Base64 encoded
 */
export function isBase64(content: string): boolean {
  // Empty content is not base64
  if (!content || content.length === 0) {
    return false;
  }
  
  // Base64 regex pattern
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  
  // Must be valid Base64 pattern and length must be multiple of 4
  if (!base64Regex.test(content) || content.length % 4 !== 0) {
    return false;
  }
  
  // If it's a very short string that could be plain text, be more careful
  if (content.length <= 4) {
    // Very short strings like "test" should not be considered base64
    return false;
  }
  
  // Try to decode and check if the result makes sense
  try {
    const decoded = Buffer.from(content, 'base64').toString('utf-8');
    
    // If the decoded content is much shorter than the original (base64 inflation),
    // and the original looks like valid base64, then it's probably base64
    const compressionRatio = decoded.length / content.length;
    
    // Base64 encoding typically results in ~33% size increase (4/3 ratio)
    // So decoded should be smaller than original
    if (compressionRatio > 1.0) {
      return false; // Decoded is larger than original, probably not base64
    }
    
    // Additional heuristic: if the content has good base64 characteristics
    // (includes both upper/lower case and numbers), it's likely base64
    const hasUpperCase = /[A-Z]/.test(content);
    const hasLowerCase = /[a-z]/.test(content);
    const hasNumbers = /[0-9]/.test(content);
    
    if (hasUpperCase && hasLowerCase && hasNumbers && content.length >= 8) {
      return true;
    }
    
    // For shorter strings, be more conservative
    if (content.length < 16) {
      return false;
    }
    
    return true;
  } catch {
    return false;
  }
}

/**
 * Safely decode Base64 content, returning the original if decoding fails
 */
export function safeBase64Decode(content: string): Uint8Array {
  try {
    // Only attempt Base64 decoding if it looks like Base64
    if (isBase64(content)) {
      return new Uint8Array(Buffer.from(content, 'base64'));
    } else {
      // Treat as UTF-8 text
      return new Uint8Array(Buffer.from(content, 'utf-8'));
    }
  } catch {
    // If decoding fails, treat as UTF-8 text
    return new Uint8Array(Buffer.from(content, 'utf-8'));
  }
}

/**
 * Convert Uint8Array to string, using UTF-8 encoding
 */
export function uint8ArrayToString(data: Uint8Array): string {
  return Buffer.from(data).toString('utf-8');
}

/**
 * Convert string to Uint8Array using UTF-8 encoding
 */
export function stringToUint8Array(text: string): Uint8Array {
  return new Uint8Array(Buffer.from(text, 'utf-8'));
}
