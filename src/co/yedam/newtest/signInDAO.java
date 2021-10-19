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

	public boolean checkId(String id, String pw) {
		System.out.println("==============" + id);
		System.out.println("==============" + pw);

		connect();
//	      List<user> list = new ArrayList<>();
		int i;
		int p;

		try {
			psmt = conn.prepareStatement("SELECT * FROM USERS  where user_id = ?");
			psmt.setString(1, id);
			i = psmt.executeUpdate();
			psmt = conn.prepareStatement("SELECT * FROM USERS  where user_Password = ?");
			psmt.setString(1, pw);
			p = psmt.executeUpdate();

			if (i == 1 && 1 == p) {
				System.out.println("로그인 성공");
				return true;

			} else {
				System.out.println("로그인 실패");
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return false;
	}

}
