function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.username.value == "myuserid" && form.pass.value == "mypass")
  {
    window.open('https://www.deakin.edu.au/life-at-deakin/why-study-at-deakin/deakinsync')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}