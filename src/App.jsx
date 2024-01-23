import React from 'react';

export function App(props) {
  return (
    <div className='App'>
      <head>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></link>
</head>
<body>
<div class="container">
  <div class="card">
    <h3 class="title">Football</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      <img width="140" src="https://www.tcpalm.com/gcdn/presto/2020/09/26/PNAS/87ca1dec-4212-408a-83a2-5621293645df-RHS-IMG-092520-AN-029.jpg"></img>
    </div>
  </div>
  <div class="card">
    <h3 class="title">Baseball</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
       <img width="140" src="https://7d7ce4d2fd579ab1db8f-ff847b6fa91c3461c76d26fad16823fb.ssl.cf1.rackcdn.com/16111.jpg"></img>
    </div>
  </div>
  <div class="card">
    <h3 class="title">Cricket</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
      <img width="140" src="https://media.cnn.com/api/v1/images/stellar/prod/231012091138-04-india-vs-pakistan-cricket.jpg?c=original"></img>
    </div>
  </div>
  <div class="card">
    <h3 class="title">Tennis</h3>
    <div class="bar">
      <div class="emptybar"></div>
      <div class="filledbar"></div>
    </div>
    <div class="circle">
     <img width="140" src="https://justwomenssports.com/wp-content/uploads/2023/03/GettyImages-1247360810-scaled.jpg"></img>
    </div>
  </div>
</div>

</body>
    </div>
  );
}

// Log to console
console.log('Hello console')