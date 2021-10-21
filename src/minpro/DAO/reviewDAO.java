package minpro.DAO;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class reviewDAO extends DAO {
	public boolean insertrev(review rev) {
		try {
			connect();
			pstmt = conn.prepareStatement("insert into review values (?,?,?,?,sysdate)");
			pstmt.setInt(1, rev.getRestid());
			pstmt.setString(2, rev.getContent());
			pstmt.setString(3, rev.getId());
			pstmt.setInt(4, rev.getGrade());

			pstmt.executeQuery();
			return true;
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		} finally {
			disconnect();
		}
	}

	public List<review> loadreview(int id) {
		List<review> list = new ArrayList<>();
		try {
			connect();
			pstmt = conn.prepareStatement(
					"select idval , r_comment rc , us.user_name usid, grade, to_char(create_date,'yyyy-MM-dd') credate from review rev left join users us on rev.user_id=us.user_id where idval=?");
			pstmt.setInt(1, id);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				review rv = new review();
				rv.setContent(rs.getString("rc"));
				rv.setId(rs.getString("usid"));
				rv.setGrade(rs.getInt("grade"));
				rv.setCredate(rs.getString("credate"));
				list.add(rv);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;

	}
}
