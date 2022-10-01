package miu.waa.pmp.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(unique = true)
	private String userName;
	private String firstName;
	private String lastName;
	@Column(unique = true)
	private String email;
	private String password;
	@ManyToOne()
	private Address address;
	private String role;


	public User(String username, String email, String password) {
		this.userName = username;

		this.email = email;
		this.password = password;
	}



}
