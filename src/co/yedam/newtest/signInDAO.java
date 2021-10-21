package co.yedam.newtest;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class signInDAO extends DAO {

	// 싱글톤
	private static signInDAO singleton = new signInDAO();

	private signInDAO() {

	}

	public static signInDAO getInstance() {
		return singleton;
	}

	public user checkId(String id, String pw) {

		connect();
		String sql = "SELECT * FROM USERS  where user_id = ? and user_Password = ?";
//	      List<user> list = new ArrayList<>();
		

		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			psmt.setString(2, pw);
			rs = psmt.executeQuery();
			
			
			if (rs.next()) {
				user us = new user();
				
				System.out.println("로그인 성공");
				us.setUserId(rs.getString("USER_ID"));
				us.setUserPw(rs.getString("USER_PASSWORD"));
				us.setUserName(rs.getString("USER_NAME"));
				return us;

			} else {
				System.out.println("로그인 실패");
				return null;
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return null;
		
	}

}
