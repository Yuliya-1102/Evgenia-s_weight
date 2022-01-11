
  const labels = [
    '02',
    '09',
    '16',
    '23',
    '30 January',
    '06',
    '13',
    '20',
    '27 February',
    '06',
    '13',
    '20',
    '27 March',
    '03',
    '10',
    '17',
    '24 April',
    '01',
    '08',
    '15',
    '22',
    '29 May',
    '05',
    '12',
    '19',
    '26 June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: "Zhenya's weight",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0,69,70],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

const handlerWeight = () => {
    const inputWeight = document.getElementById('weight');
    data.datasets[0].data.push(+inputWeight.value);
    localStorage.setItem('weight', JSON.stringify(data.datasets[0].data));
    document.getElementById('buttonDelete').disabled = false;
    myChart.update();
    console.log(1);
    inputWeight.value = '';
    
};

const renderWeight = () => {
    if(!localStorage.getItem('weight')){
        document.getElementById('buttonDelete').disabled = false;
        localStorage.setItem('weight', JSON.stringify(data.datasets[0].data));
        const dataArr = JSON.parse(localStorage.getItem('weight'));
        data.datasets[0].data = dataArr;
        myChart.update();
        document.getElementById('buttonDelete').disabled = true;
        console.log(2);
    }else{
        const dataArr = JSON.parse(localStorage.getItem('weight'));
        data.datasets[0].data = dataArr;
        myChart.update();
        document.getElementById('buttonDelete').disabled = false;
        console.log(3);
    }
}
renderWeight();

const deleteWeight = () => {
    if(data.datasets[0].data.length > 3) {
        document.getElementById('buttonDelete').disabled = false;
        const dataArr = JSON.parse(localStorage.getItem('weight'));
        dataArr.pop();
        localStorage.setItem('weight', JSON.stringify(dataArr));
        renderWeight();
        console.log(4);
    }else{
        document.getElementById('buttonDelete').disabled = true;
        console.log(5);
    }
    
};

document.getElementById('buttonAdd').addEventListener('click', handlerWeight);
document.getElementById('buttonDelete').addEventListener('click', deleteWeight);



