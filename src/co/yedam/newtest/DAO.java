package co.yedam.newtest;



import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DAO {
	protected Connection conn;
	protected Statement stmt;
	protected ResultSet rs;
	protected PreparedStatement psmt;

	String user = "park";
	String pass = "park";
	String url = "jdbc:oracle:thin:@localhost:1521:xe";

	protected void connect() {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "park", "park");
			System.out.println("?��결성�?.");
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		}
	}

	// ?��결해?��.
	protected void disconnect() {
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

}
