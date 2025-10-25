import { k as useToast, b as useRuntimeConfig } from './server.mjs';

const useNotify = () => {
  const toast = useToast();
  const config = useRuntimeConfig();
  const s = (message, title = "Success") => toast.add({
    severity: "success",
    summary: title,
    detail: message,
    life: parseInt(config.public.toast)
  });
  const e = (message, title = "Error") => toast.add({
    severity: "error",
    summary: title,
    detail: message,
    life: parseInt(config.public.toast)
  });
  const i = (message, title = "Info") => toast.add({
    severity: "info",
    summary: title,
    detail: message,
    life: parseInt(config.public.toast)
  });
  const w = (message, title = "Warning") => toast.add({
    severity: "warn",
    summary: title,
    detail: message,
    life: parseInt(config.public.toast)
  });
  return { s, e, i, w };
};

export { useNotify as u };
//# sourceMappingURL=notify-CjQ8ixde.mjs.map
