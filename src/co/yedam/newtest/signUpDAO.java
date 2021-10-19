package co.yedam.newtest;

import java.sql.SQLException;

public class signUpDAO extends DAO {

	// 싱글톤

	private static signUpDAO singleton = new signUpDAO();

	private signUpDAO() {

	}

	public static signUpDAO getInstance() {
		return singleton;
	}

	public boolean signUpCheckId(String id) {
//		System.out.println("=============="+id);		      
		connect();

		try {
			psmt = conn.prepareStatement("SELECT * FROM USERS  where user_id = ?");
			psmt.setString(1, id);
			rs = psmt.executeQuery();

			if (rs.next()) {
				return true;
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false;
	}

	// 회원가입 버튼 누르면 아이디 비교 후 회원 가입 db에 값 저장
	public boolean signUp(String id, String pw, String name) {
//		System.out.println("=============="+id);		      
		connect();

		try {
			psmt = conn.prepareStatement("insert into users values(?,?,?)");
			psmt.setString(1, id);
			psmt.setString(2, pw);
			psmt.setString(3, name);
			rs = psmt.executeQuery();

			if (rs.next()) {
				return true;
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false;
	}

}
