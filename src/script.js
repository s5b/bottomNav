const resizelator = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};
window.addEventListener('resize', resizelator);
resizelator();

function showAlert(target) {
    window.alert(`You clicked the '${target}' menu item.`);
    return true;
}
