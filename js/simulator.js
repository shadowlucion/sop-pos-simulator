const pos = document.querySelector('#pos');
const sop = document.querySelector('#sop');
const btns = document.querySelectorAll('.special');

btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		pos.classList.toggle('back');
		sop.classList.toggle('back');
	})
});

const sop1 = document.querySelector('#sop1');
const sop2 = document.querySelector('#sop2');
const sop3 = document.querySelector('#sop3');
const sop4 = document.querySelector('#sop4');

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	console.log(ev);
	//	ev.dataTransfer.setData("text", ev.target.id);
	window.localStorage.currentId = ev.target.id;
}

function drop(ev) {
	ev.preventDefault();
	console.log(ev);
	//	var imgid = ev.dataTransfer.getData("text");
	var imgid = window.localStorage.currentId;
	var targetid = ev.target.id;
	if (ev.target.innerHTML != "") {
		if (imgid != "not1") {
			if (targetid != "sop3") {
				ev.target.appendChild(document.getElementById(imgid));
			} else {
				alert("NOT ALLOWED");
			}
		} else {
			if (targetid != "sop1" && targetid != "sop2" && targetid != "sop4") {
				ev.target.appendChild(document.getElementById(imgid));
			} else {
				alert("Not Allowed");
			}
		}

	}

}




function validate() {

	document.querySelector(".sp1").innerHTML = "";
	document.querySelector(".sp2").innerHTML = "";
	document.querySelector(".sp3").innerHTML = "";
	document.querySelector(".sp4").innerHTML = "";
	document.querySelector("#userinfo").innerHTML = "";
	document.querySelector("#userinfo").style = "background:white;";

	a = sop1.children[0];
	b = sop2.children[0];
	c = sop3.children[0];
	d = sop4.children[0];
	
	if (a != undefined && b != undefined && c != undefined && d != undefined) {
		
		a = a.id;
		b = b.id;
		c = c.id;
		d = d.id;

		if ((a == "and1" || a == "and2") && (b == "or1") && (c == "not1") && (d == "and1" || d == "and2")) {
			alert("Successful");
			document.querySelector(".sp1").innerHTML = "<b>(A*B)</b>";
			document.querySelector(".sp2").innerHTML = "<b>(Result)</b>";
			document.querySelector(".sp3").innerHTML = "<b>(A')</b>";
			document.querySelector(".sp4").innerHTML = "<b>(A'*C)</b>";
			document.querySelector("#userinfo").innerHTML = "<b>Result:(A*B)+(A'*C)</b>";
			document.querySelector("#userinfo").style = "background:green;";


		} else {
			alert("Failure");
			document.querySelector("#userinfo").style = "background:red;";
			if (a == "or1") {
				document.querySelector(".sp1").innerHTML = "<b>(A+B)</b>";
				document.querySelector(".sp2").innerHTML = "<b>(Result)</b>";
				document.querySelector(".sp3").innerHTML = "<b>(A')</b>";
				document.querySelector(".sp4").innerHTML = "<b>(A'*C)</b>";
				document.querySelector("#userinfo").innerHTML = "<b>Result:(A+B)*(A'*C)</b>";


			} else {
				document.querySelector(".sp1").innerHTML = "<b>(A*B)</b>";
				document.querySelector(".sp2").innerHTML = "<b>(Result)</b>";
				document.querySelector(".sp3").innerHTML = "<b>(A')</b>";
				document.querySelector(".sp4").innerHTML = "<b>(A'+C)</b>";
				document.querySelector("#userinfo").innerHTML = "<b>Result:(A*B)*(A'+C)</b>";
			}

		}

	} else {
		alert("Kindly Complete Circuit");
	}

}




function quizcheckerfun() {
	
	

	document.querySelector(".sp1").innerHTML = "";
	document.querySelector(".sp2").innerHTML = "";
	document.querySelector(".sp3").innerHTML = "";
	document.querySelector(".sp4").innerHTML = "";
	document.querySelector("#userinfo").innerHTML = "";
	document.querySelector("#userinfo").style = "background:white;";




	document.getElementById("showres").innerHTML = "";
	document.getElementById("userinfo").innerHTML = "";
	document.querySelector(".tabclr").style = "background:#C38D9E";

	var a = Number(document.getElementById("qi1").value);
	var b = Number(document.getElementById("qi2").value);
	var c = Number(document.getElementById("qi3").value);

	if ((a == 0 || a == 1) && (b == 0 || b == 1) && (c == 0 || c == 1)) {
		if (a == 0) {
			k = 1;
		} else {
			k = 0;
		}
		var output = Boolean((a * b) + ((k) * c));
		if (output == false) {
			output = 0;
		} else {
			output = 1;
		}

		output = Number(output);





		i = sop1.children[0];
		j = sop2.children[0];
		k = sop3.children[0];
		l = sop4.children[0];

		var tabid = 1000 + a * 100 + b * 10 + c;


		if (i != undefined && j != undefined && k != undefined && l != undefined) {
			i = i.id;
			j = j.id;
			k = k.id;
			l = l.id;

			if ((i == "and1" || i == "and2") && (j == "or1") && (k == "not1") && (l == "and1" || l == "and2")) {


				document.querySelector(".sp1").innerHTML = "<b>(A*B)</b>";
				document.querySelector(".sp2").innerHTML = "<b>(Result)</b>";
				document.querySelector(".sp3").innerHTML = "<b>(A')</b>";
				document.querySelector(".sp4").innerHTML = "<b>(A'*C)</b>";

				document.querySelector("#userinfo").innerHTML = "<b>Result:(A*B)+(A'*C)</b>";
				document.querySelector("#userinfo").style = "background:green;";


				document.getElementById("showres").innerHTML = "";
				document.getElementById("qif").value = output;
				document.getElementById(tabid).style = "background:green;";
				document.getElementById("showres").innerHTML = "Success";
				document.getElementById("showres").style = "color:green";

			} else {
				if (i == "or1") {
					text = "(A+B)*('A*C)";
					document.querySelector(".sp1").innerHTML = "<b>(A+B)</b>";
					document.querySelector(".sp2").innerHTML = "<b>(Result)</b>";
					document.querySelector(".sp3").innerHTML = "<b>(A')</b>";
					document.querySelector(".sp4").innerHTML = "<b>(A'*C)</b>";



				} else {
					text = "(A*B)*('A+C)";
					document.querySelector(".sp1").innerHTML = "<b>(A*B)</b>";
					document.querySelector(".sp2").innerHTML = "<b>(Result)</b>";
					document.querySelector(".sp3").innerHTML = "<b>(A')</b>";
					document.querySelector(".sp4").innerHTML = "<b>(A'+C)</b>";



				}

				document.getElementById(tabid).style = "background:red;";
				document.getElementById("showres").innerHTML = "Wrong...";
				document.getElementById("showres").style = "color:red";
				document.getElementById("userinfo").innerHTML = "Result:" + text;
				document.getElementById("qif").value = "";
			}

		} else {



			document.getElementById("showres").innerHTML = "";
			document.getElementById("userinfo").innerHTML = "";
		}

	} else {
		alert("Only 0,1 is allowed in input");	
		document.getElementById("showres").innerHTML = "";
		document.getElementById("userinfo").innerHTML = "";
	
	}

}





//Functions for other one

function aallowDrop(ev) {
	ev.preventDefault();
}

function adrag(ev) {
	console.log(ev);
	//	ev.dataTransfer.setData("text", ev.target.id);
	window.localStorage.currentId = ev.target.id;
}


function adrop(ev) {
	ev.preventDefault();
	console.log(ev);
	//	var imgid = ev.dataTransfer.getData("text");
	var imgid = window.localStorage.currentId;
	var targetid = ev.target.id;
	if (ev.target.innerHTML != "") {
		if (imgid != "not") {

			if (targetid != "asop3") {
				ev.target.appendChild(document.getElementById(imgid));
			} else {
				alert("NOT ALLOWED");
			}
		} else {
			if (targetid != "asop1" && targetid != "asop2" && targetid != "asop4") {
				ev.target.appendChild(document.getElementById(imgid));
			} else {
				alert("Not Allowed");
			}
		}

	}

}

//function changer(val){
//		if(val==1){
//		document.getElementById("sop").style.transition = "transform 250ms ease-in-out";
//		document.getElementById("sop").style.transform = "translateX(-100%)";
//		document.getElementById("pos").style.transform = "translateX(0%)";
//	}else{
//
//	}
//}



function avalidate() {

	document.querySelector(".asp1").innerHTML = "";
	document.querySelector(".asp2").innerHTML = "";
	document.querySelector(".asp3").innerHTML = "";
	document.querySelector(".asp4").innerHTML = "";
	document.querySelector("#auserinfo").innerHTML = "";
	document.querySelector("#auserinfo").style = "background:white;";
	document.querySelector("#ashowres").innerHTML = "";
	document.querySelector(".atabclr").style = "background:#E8A87C";



	a = asop1.children[0];
	b = asop2.children[0];
	c = asop3.children[0];
	d = asop4.children[0];

	if (a != undefined && b != undefined && c != undefined && d != undefined) {
		a = a.id;
		b = b.id;
		c = c.id;
		d = d.id;

		if ((a == "or" || a == "aor") && (b == "and") && (c == "not") && (d == "or" || d == "aor")) {
			alert("Successful");
			document.querySelector(".asp1").innerHTML = "<b>(A+B')</b>";
			document.querySelector(".asp2").innerHTML = "<b>Result</b>";
			document.querySelector(".asp3").innerHTML = "<b>(B')</b>";
			document.querySelector(".asp4").innerHTML = "<b>(A+C)</b>";
			document.querySelector("#auserinfo").innerHTML = "<b>Result:(A+C)*(A+B')</b>";
			document.querySelector("#auserinfo").style = "background:green;";

		} else {
			alert("Failure");
			if (a == "and") {
				document.querySelector(".asp1").innerHTML = "<b>(A*B')</b>";
				document.querySelector(".asp2").innerHTML = "<b>Result</b>";
				document.querySelector(".asp3").innerHTML = "<b>(B')</b>";
				document.querySelector(".asp4").innerHTML = "<b>(A+C)</b>";
				document.querySelector("#auserinfo").innerHTML = "<b>Result:(A+C)+(A*B')</b>";
			} else {
				document.querySelector(".asp1").innerHTML = "<b>(A+B')</b>";
				document.querySelector(".asp2").innerHTML = "<b>Result</b>";
				document.querySelector(".asp3").innerHTML = "<b>(B')</b>";
				document.querySelector(".asp4").innerHTML = "<b>(A*C)</b>";
				document.querySelector("#auserinfo").innerHTML = "<b>Result:(A*C)+(A+B')</b>";


			}
		}


	} else {
		alert("Kindly Complete Circuit");
	}

}









//function aquizcheckerfun() {
//	document.getElementById("ashowres").innerHTML = "";
//	document.getElementById("auserinfo").innerHTML = "";
//	document.querySelector(".atabclr").style="background:#E8A87C";
//	var a = Number(document.getElementById("aqi1").value);
//	var b = Number(document.getElementById("aqi2").value);
//	var c = Number(document.getElementById("aqi3").value);
//
//
//	if ((a == 0 || a == 1) && (b == 0 || b == 1) && (c == 0 || c == 1)) {
//		var k;
//		if (b == 0) {
//			k = 1;
//		} else {
//			k = 0;
//		}
//		var output = Boolean((a + c) * (a + k));
//		if (output == true) {
//			ouput = 1;
//		} else {
//			output = 0;
//		}
//		var key = a + "," + b + "," + c;
//		var value = output;
//		if (tpos[key] == undefined) {
//			tpos[key] = value;
//			var text = "<tr><th scope=" + "'" + "row" + "'" + ">" + a + "</th><td>" + b + "</td><td>" + c + "</td><td>" + Number(output) + "</td></tr>";
//			var tableRef = document.getElementById('tpostab');
//			var newRow = tableRef.insertRow(tableRef.rows.length);
//			newRow.innerHTML = text;
//
//		}
//
//		if (output == 1) {
//			document.getElementById("aqi4").innerHTML = "<b>1</b>";
//		} else {
//			document.getElementById("aqi4").innerHTML = "<b>0</b>";
//		}
//
//	} else {
//		alert("We can only enter 0,1");
//	}
//
//}









function aquizcheckerfun() {


	document.querySelector(".asp1").innerHTML = "";
	document.querySelector(".asp2").innerHTML = "";
	document.querySelector(".asp3").innerHTML = "";
	document.querySelector(".asp4").innerHTML = "";
	document.querySelector("#auserinfo").innerHTML = "";
	document.querySelector("#auserinfo").style = "background:white;";



	document.getElementById("ashowres").innerHTML = "";
	document.getElementById("auserinfo").innerHTML = "";
	document.querySelector(".atabclr").style = "background:#E8A87C";

	var a = Number(document.getElementById("aqi1").value);
	var b = Number(document.getElementById("aqi2").value);
	var c = Number(document.getElementById("aqi3").value);
	var k;
	if ((a == 0 || a == 1) && (b == 0 || b == 1) && (c == 0 || c == 1)) {
		if (b == 0) {
			k = 1;
		} else {
			k = 0;
		}
		var output = Boolean((a+c)*(a+k));
		if (output == false) {
			output = 0;
		} else {
			output = 1;
		}

		output = Number(output);





		i = asop1.children[0];
		j = asop2.children[0];
		k = asop3.children[0];
		l = asop4.children[0];

		var tabid = 2000 + a * 100 + b * 10 + c;


		if (i != undefined && j != undefined && k != undefined && l != undefined) {
			i = i.id;
			j = j.id;
			k = k.id;
			l = l.id;

			if ((i == "or" || i == "aor") && (j == "and") && (k == "not") && (l == "or" || l == "aor")) {
				document.getElementById("ashowres").innerHTML = "";
				document.getElementById("aqif").value = output;
				document.getElementById(tabid).style = "background:green;";
				document.getElementById("ashowres").innerHTML = "Success";
				document.getElementById("ashowres").style = "color:green";


				document.querySelector(".asp1").innerHTML = "<b>(A+B')</b>";
				document.querySelector(".asp2").innerHTML = "<b>Result</b>";
				document.querySelector(".asp3").innerHTML = "<b>(B')</b>";
				document.querySelector(".asp4").innerHTML = "<b>(A+C)</b>";
				document.querySelector("#auserinfo").innerHTML = "<b>Result:(A+C)*(A+B')</b>";
				document.querySelector("#auserinfo").style = "background:green;";





			} else {
				if (i == "and") {
					text = "(A+C)+(A*'B)";

					document.querySelector(".asp1").innerHTML = "<b>(A*B')</b>";
					document.querySelector(".asp2").innerHTML = "<b>Result</b>";
					document.querySelector(".asp3").innerHTML = "<b>(B')</b>";
					document.querySelector(".asp4").innerHTML = "<b>(A+C)</b>";

				} else {
					text = "(A*C)+(A+'B)";

					document.querySelector(".asp1").innerHTML = "<b>(A+B')</b>";
					document.querySelector(".asp2").innerHTML = "<b>Result</b>";
					document.querySelector(".asp3").innerHTML = "<b>(B')</b>";
					document.querySelector(".asp4").innerHTML = "<b>(A*C)</b>";



				}

				document.getElementById(tabid).style = "background:red;";
				document.getElementById("ashowres").innerHTML = "Wrong...";
				document.getElementById("ashowres").style = "color:red";
				document.getElementById("auserinfo").innerHTML = "Result:" + text;
				document.getElementById("aqif").value = "";
			}

		} else {

			
			document.getElementById("ashowres").innerHTML = "";
			document.getElementById("auserinfo").innerHTML = "";
		}








	} else {
		alert("Only 0,1 is allowed in input");
		document.getElementById("ashowres").innerHTML = "";
		document.getElementById("auserinfo").innerHTML = "";
	}
}
