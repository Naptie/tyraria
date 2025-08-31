import { SvelteComponent } from 'svelte';

interface TypstPreviewProps {
  reader?: any;
  writer?: any;
  class?: string;
  style?: string;
}

export default class TypstPreview extends SvelteComponent<TypstPreviewProps> {
  // Method to initialize preview
  initPreview(filePath: string): Promise<void>;
}
