package minpro.DAO;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class restDAO extends DAO {
	public List<rest> viewRest() {
		List<rest> list = new ArrayList<>();

		try {
			connect();
			pstmt = conn.prepareStatement("select * from restaurant where corr =0");
			rs = pstmt.executeQuery();
			while (rs.next()) {
				rest rt = new rest();
				rt.setId(rs.getInt("idval"));
				rt.setName(rs.getString("restaurant_name"));
				rt.setImage_loc(rs.getString("image_location"));
				list.add(rt);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}

	public List<rest> viewCafe() {
		List<rest> list = new ArrayList<>();

		try {
			connect();
			pstmt = conn.prepareStatement("select * from restaurant where corr =1");
			rs = pstmt.executeQuery();
			while (rs.next()) {
				rest rt = new rest();
				rt.setId(rs.getInt("idval"));
				rt.setName(rs.getString("restaurant_name"));
				rt.setImage_loc(rs.getString("image_location"));
				list.add(rt);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}
	public List<manu> getMenu(int t) {
		List<manu> list = new ArrayList<>();

		try {
			connect();
			pstmt = conn.prepareStatement("select * from main_manu where idval =?");
			pstmt.setInt(0, t);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				manu rt = new manu();
				rt.setId(rs.getInt("idval"));
				rt.setName(rs.getString("food_name"));
				list.add(rt);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}
}
