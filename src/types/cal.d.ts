
// Types pour Cal.com
declare global {
  interface Window {
    Cal?: {
      (action: string, calLink: string, options?: any): void;
      ns?: {
        [key: string]: (action: string, options?: any) => void;
      };
    };
  }
}

export {};
