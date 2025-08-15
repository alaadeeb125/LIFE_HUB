  const CupsCount = document.getElementById('water-count');
  const addBtn = document.getElementById('add-cup');
  const removeBtn = document.getElementById('remove-cup');
  let count = 0;

  addBtn.addEventListener('click', () => {
    count++;
    CupsCount.textContent = count;
  });

  removeBtn.addEventListener('click', () => {
    if(count > 0) {
      count--;
      CupsCount.textContent = count;
    }
  });