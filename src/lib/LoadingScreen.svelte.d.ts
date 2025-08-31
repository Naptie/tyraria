import { SvelteComponent } from 'svelte';

interface LoadingScreenProps {
  message?: string;
}

export default class LoadingScreen extends SvelteComponent<LoadingScreenProps> {}
