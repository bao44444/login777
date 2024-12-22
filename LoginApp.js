const SHEET_URL = "https://docs.google.com/spreadsheets/d/1EaW7OxG7KArbVlXrG02xCnhDiaaIr7ipSvnfs18pUyM/edit"; // 替换为你的 Google Sheet 链接

function doGet() {
  return HtmlService.createHtmlOutputFromFile("LoginPage").setTitle("Login");
}

// 验证用户名和密码
function checkCredentials(username, password) {
  const validCredentials = {
    admin777: "777774",
    user1: "password1",
    user2: "password2",
  };

  if (validCredentials[username] === password) {
    return { success: true, url: SHEET_URL };
  } else {
    return { success: false };
  }
}