package co.yedam.newtest;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class signInDAO extends DAO  {

	
	//�떛湲��넠 諛⑹떇
	private static signInDAO singleton = new signInDAO();
	private signInDAO() {
		
	}
	public static signInDAO getInstance() {
		return singleton;
	}
	
	public boolean checkId(String id) {
		System.out.println("=============="+id);
	      
	      connect();
//	      List<user> list = new ArrayList<>();
	      String sql = "SELECT * FROM USERS  where user_id = ?";
	      
	      try {
	         psmt = conn.prepareStatement(sql);
	         psmt.setString(1, id);
	         rs = psmt.executeQuery();
	       
	         if ( rs.next()) {
	            return false;
	         } else {
	            return true;
	         }
	         
	      } catch (SQLException e) {
	         e.printStackTrace();
	      } finally {
	         disconnect();
	      }
	      return true;
	   }
	
}
