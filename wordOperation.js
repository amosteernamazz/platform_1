function openword()
{
    var word = new ActiveXObject("Word.Application");
    word.Visible = true;
    word.Document.Open("http://localhost/platformAir/demo/demo.docx")
    // windows.open("http://localhost/platformAir/demo/demo.docx");
}



