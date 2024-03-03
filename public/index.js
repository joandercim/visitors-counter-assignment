const handleClick = async () => {
  const res = await fetch('http://localhost:3000/count');
  const { currentCount } = await res.json();

  const h2 = document.createElement('h2');
  h2.textContent = `${currentCount} visitors`;

  document.getElementById('response').appendChild(h2);
};

document.querySelector('button').addEventListener('click', handleClick);
