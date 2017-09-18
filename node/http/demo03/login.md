  if('/login' == req.url){
    res.end(['<h1>Login Interface</h1>',
      '<form method="POST" action="/login">',
      '<fieldset>',
      '<label><h3>User Login</h3></labal>',
      '<p>Name</p>',
      '<input type ="text" name="name">',
      '<p>password</p>',
      '<input type = "password" name="password">',
      '<p><button>sumit</button></p>',
      '</form>'
  ].join(''));
