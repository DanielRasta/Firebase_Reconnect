# Firebase Reconnect
A short js script I wrote to bypass Firebase's disconnection issue

All you need to do is to add these two lines in your main layout/page.

Using the `Body onload` tag you can call the main function.

	<head>
		<script src="https://cdn.firebase.com/js/client/2.2.9/firebase.js"></script>
    	<script src="js/FireBase_Reconnect.js"></script>
  	</head>
  	
	<body  onload="FBPageLoad()">
		...
	</body>

Check out the example page for more info!