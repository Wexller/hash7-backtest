declare module 'primevue/toasteventbus' {
  import { ToastMessageOptions } from 'primevue/toast';

  interface ToastEventBus {
    emit(event: 'add' | 'remove', message: ToastMessageOptions): void;
    emit(event: 'remove-group', group: string): void;
    emit(event: 'remove-all-groups'): void;
  }

  const ToastEventBus: ToastEventBus;
  export default ToastEventBus;
}
