let counter = document.querySelectorAll('.counterdata');

for (let single of counter) {
    let count = 0;
    let counterUp = () => {
        count++;
        if (count <= single.dataset.counterdata){
            single.innerHTML = count;
        }
    }
    setInterval(counterUp, 10);
}