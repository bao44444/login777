<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
<body>
    <h2>Login Page</h2>
    <form id="loginForm">
        <label for="username">ID:</label>
        <input type="text" id="username" required><br><br>
        
        <label for="password">Password:</label>
        <input type="password" id="password" required><br><br>

        <button type="submit">Login</button>
    </form>

    <script>
        // 这里设置正确的用户名和密码
        const validUser = {
            username: "admin777",  // 这里替换为你希望的用户名
            password: "777774"  // 这里替换为你希望的密码
        };

        // 获取表单元素
        const form = document.getElementById("loginForm");

        // 监听表单提交事件
        form.onsubmit = function(event) {
            event.preventDefault();  // 防止页面刷新

            // 获取用户输入的用户名和密码
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // 如果用户名和密码匹配，跳转到 Google Sheets
            if (username === validUser.username && password === validUser.password) {
                window.location.href = "https://docs.google.com/spreadsheets/d/1EaW7OxG7KArbVlXrG02xCnhDiaaIr7ipSvnfs18pUyM/edit";  // 替换为你的 Google Sheets 链接
            } else {
                alert("Invalid ID or Password.");
            }
        };
    </script>
</body>
</html>
