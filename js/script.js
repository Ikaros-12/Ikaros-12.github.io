function pagar() {
    let a = document.createElement('a');
    a.href = 'https://mpago.la/2HyERkS';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }