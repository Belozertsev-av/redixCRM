export const useClicksStore = defineStore('clicks', () => {
    const menu = ref(false)
    const stats = ref(false)

    const toggleMenu = () => menu.value = !menu.value
    const toggleStats = () => stats.value = !stats.value

    return { menu, stats, toggleMenu, toggleStats }
})