package co.yedam.newtest;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class FavoriteDAO extends DAO {

	public List<FavoriteVO> getFavoriteVO(String userId) {
		
		connect();
		List<FavoriteVO> list = new ArrayList<>();
		String sql = "select restaurant_name, image_location, store_address from RESTAURANT where idval in (select idval from favorites where user_id = ?)";
		
		
		try {
			
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, userId);
			rs = psmt.executeQuery();
			
			if(rs.next()) {
				System.out.println("드디어 성공~!!!!!!!!!!!!!!!");
			}
			while (rs.next()) {
				System.out.println("111111111111111111111111111111111111");
				FavoriteVO fvo = new FavoriteVO();
				fvo.setRsName(rs.getString("RESTAURANT_NAME"));
				fvo.setImgLo(rs.getString("IMAGE_LOCATION"));
				fvo.setStrAddr(rs.getString("STORE_ADDRESS"));
				list.add(fvo);
			}

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}
	
	

}
