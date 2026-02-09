import "./AdminLogin.css";

function AdminLogin({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    onLogin(username, password);
  };

  return (
    <div className="admin-login-page">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit} className="admin-login-form">
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
