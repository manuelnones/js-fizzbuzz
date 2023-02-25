for (let divInnerEl = 1; divInnerEl <= 100; divInnerEl++) {
    let listEl = document.getElementById(`list`);
    let newdivEl = document.createElement(`div`);

    listEl.append(newdivEl);
    newdivEl.append(divInnerEl);

    newdivEl.style.backgroundColor = `lightgreen`;
    newdivEl.style.height = `70px`;
    newdivEl.style.width = `70px`;
    newdivEl.style.border = `1px solid black`;
    newdivEl.style.display = `flex`;
    newdivEl.style.alignItems = `center`;
    newdivEl.style.justifyContent = `center`;

    if (divInnerEl % 3 == 0) {
        newdivEl.style.backgroundColor = `red`;
        newdivEl.innerHTML = `fizz`
    } else if (divInnerEl % 5 == 0) {
        newdivEl.style.backgroundColor = `blue`;
        newdivEl.innerHTML = `bizz`
    }

    if (divInnerEl % 3 == 0 && divInnerEl % 5 == 0) {
        newdivEl.style.backgroundColor = `purple`;
        newdivEl.innerHTML = `fizzbizz`
    }
}