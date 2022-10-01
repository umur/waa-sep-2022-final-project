package miu.waa.pmp.response;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private Long id;
	private String userName;
	private String email;

	public JwtResponse(String accessToken, Long id, String username, String email) {
		this.token = accessToken;
		this.id = id;
		this.userName = username;
		this.email = email;

	}

	public String getAccessToken() {
		return token;
	}

	public void setAccessToken(String accessToken) {
		this.token = accessToken;
	}

	public String getTokenType() {
		return type;
	}

	public void setTokenType(String tokenType) {
		this.type = tokenType;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return userName;
	}

	public void setUsername(String username) {
		this.userName = username;
	}

}
