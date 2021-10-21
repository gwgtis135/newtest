package minpro.DAO;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class restDAO extends DAO {
	public void insertRest(rest r) {
		try {
			connect();
			pstmt = conn.prepareStatement("insert into restaurant values (nvl(max(idval)+1),?,?,?,?,?,?,?)");
			pstmt.setInt(1, r.getCorr());
			pstmt.setString(2, r.getName());
			pstmt.setString(3, r.getImage_loc());
			pstmt.setString(4,r.getOff_hours());
			pstmt.setInt(5, Integer.parseInt(r.getPark()));
			pstmt.setString(6, r.getAddr());
			pstmt.setString(7, r.getPhone_number());

			pstmt.executeQuery();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
	}
	public List<rest> viewRest() {
		List<rest> list = new ArrayList<>();

		try {
			connect();
			pstmt = conn.prepareStatement(
					"select rest.idval as idval, rest.restaurant_name as restaurant_name,rest.image_location as image_location,nvl(list.list,'none') as list "
							+ "from restaurant rest\r\n"
							+ "left join (select idval, LISTAGG(mm.food_name,',') WITHIN GROUP (ORDER BY mm.idval ) AS list from main_menu mm group by idval) list\r\n"
							+ "on rest.idval = list.idval where corr =1 order by rest.idval asc");
			rs = pstmt.executeQuery();
			while (rs.next()) {
				rest rt = new rest();
				rt.setId(rs.getInt("idval"));
				rt.setName(rs.getString("restaurant_name"));
				rt.setImage_loc(rs.getString("image_location"));
				rt.setMenu(rs.getString("list"));
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
			pstmt = conn.prepareStatement(
					"select rest.idval as idval, rest.restaurant_name as restaurant_name,rest.image_location as image_location,nvl(list.list,'none') as list "
							+ "from restaurant rest\r\n"
							+ "left join (select idval, LISTAGG(mm.food_name,',') WITHIN GROUP (ORDER BY mm.idval ) AS list from main_menu mm group by idval) list\r\n"
							+ "on rest.idval = list.idval where corr =0 order by rest.idval asc");
			rs = pstmt.executeQuery();
			while (rs.next()) {
				rest rt = new rest();
				rt.setId(rs.getInt("idval"));
				rt.setName(rs.getString("restaurant_name"));
				rt.setImage_loc(rs.getString("image_location"));
				rt.setMenu(rs.getString("list"));
				list.add(rt);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}
		return list;
	}

	public rest detailview(int t) {
		rest rest = new rest();
//		System.out.println(t);

		try {
			connect();
			pstmt = conn.prepareStatement(
					"select rest.idval idval, rest.restaurant_name res_name, rest.store_address addr, rest.office_hours offhour,\r\n"
					+ "nvl(rest.phone_number,'none') phone_number, trunc(rev.grade,2) grade,\r\n"
					+ "case rest.parking when 0 then 'none' when 1 then 'exist' end as parking,\r\n"
					+ "nvl(menu_list.list,'none') as list, rev.cnt cnt,\r\n"
					+ "reim.list ima_list, rest.image_location imgloc from restaurant rest\r\n"
					+ "left join (select mm.idval, LISTAGG(mm.food_name,',') WITHIN GROUP (ORDER BY mm.idval ) AS list \r\n"
					+ "from main_menu mm group by idval) menu_list on rest.idval = menu_list.idval \r\n"
					+ "left join (select re.idval, avg(re.grade) grade, count(idval) cnt from review re  group by idval) rev\r\n"
					+ "on rest.idval = rev.idval\r\n"
					+ "left join (select ri.idval, LISTAGG(ri.image_location,',') WITHIN GROUP (ORDER BY ri.idval ) AS list \r\n"
					+ "from restaurant_image ri group by idval) reim on rest.idval = reim.idval\r\n"
					+ "where rest.idval = ?");
			pstmt.setInt(1, t);

			rs = pstmt.executeQuery();
			while (rs.next()) {
//				idval, res_name, addr, offhour, phone_number, grade, parking, list
				rest.setId(rs.getInt("idval"));
				rest.setName(rs.getString("res_name"));
				rest.setAddr(rs.getString("addr"));
				rest.setOff_hours(rs.getString("offhour"));
				rest.setPhone_number(rs.getString("phone_number"));
				rest.setGrade(rs.getDouble("grade"));
				rest.setPark(rs.getString("parking"));
				rest.setMenu(rs.getString("list"));
				rest.setImglist(rs.getString("ima_list"));
				rest.setImage_loc(rs.getString("imgloc"));
				rest.setCnt(rs.getInt("cnt"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			disconnect();
		}

		return rest;
	}
}
