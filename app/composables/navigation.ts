export const useNavigation = () => {
  const navItems = ref([
    {
      label: 'Dashboard',
      icon: 'pi pi-chart-line',
      command: () => navigateTo('/dashboard'),
    },
    {
      label: 'Users',
      icon: 'pi pi-users',
      command: () => navigateTo('/users/list'),
    },
    {
      label: 'Leave',
      icon: 'pi pi-telegram',
      command: () => navigateTo('/leaves/list'),
    },
    {
      label: 'Sanction',
      icon: 'pi pi-ban',
      command: () => {},
    },
    {
      label: 'Internship',
      icon: 'pi pi-graduation-cap',
      command: () => {},
    },
    {
      label: 'Bill',
      icon: 'pi pi-receipt',
      command: () => {},
    },
    {
      label: 'Warehouse',
      icon: 'pi pi-warehouse',
      command: () => {},
    },
    {
      label: 'Job',
      icon: 'pi pi-briefcase',
      command: () => {},
    },
    {
      label: 'Reservation',
      icon: 'pi pi-save',
      command: () => {},
    },
    {
      label: 'Delivery',
      icon: 'pi pi-box',
      command: () => {},
    },
    {
      label: 'Career',
      icon: 'pi pi-chart-line',
      command: () => {},
    },
  ])

  return {
    navItems,
  }
}
