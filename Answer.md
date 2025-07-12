7. What are the main benefits of using JWT for authentication?
JWT allows secure, stateless authentication by embedding user info in a signed token, making it easy to verify requests without storing session data and it works well across distributed systems.

8. Where should you store your JWT secret and why?
The JWT secret should be stored in a .env file to keep it secure and hidden from your source code, preventing it from being accidentally shared or exposed in version control.

9. Why is it important to hash passwords even if the system is protected with JWT?
Hashing passwords protects them in the database, so even if attackers gain access, they can't read the original passwords, unlike JWT which only protects during user sessions.

10. What might happen if a protected route does not check the JWT?
If a route doesn’t verify the JWT, anyone could access it without logging in, which can lead to data leaks, unauthorized actions, and major security vulnerabilities.

11. How does Swagger help frontend developers or API consumers?
Swagger provides clear, interactive documentation for APIs, making it easier for frontend developers to understand how to use endpoints, what data is needed, and what responses to expect.

12. What tradeoffs come with using token expiration (e.g., 1 hour)?
Short expiration improves security by limiting token misuse time, but it can inconvenience users by requiring frequent re-authentication unless a refresh token system is added.