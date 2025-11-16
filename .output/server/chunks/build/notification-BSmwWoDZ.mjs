import { ref } from 'vue';
import { v as storages } from './server.mjs';
import { defineStore } from 'pinia';

const useNotificationStore = defineStore(
  "notification",
  () => {
    const list = ref([]);
    const setList = (content) => list.value = content;
    const updateList = (content) => list.value.push(content);
    return {
      list,
      setList,
      updateList
    };
  },
  {
    persist: {
      storage: storages.localStorage()
    }
  }
);

export { useNotificationStore as u };
//# sourceMappingURL=notification-BSmwWoDZ.mjs.map
