package co.yedam.newtest;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.newtest.FavoriteDAO;
import co.yedam.newtest.FavoriteVO;

@WebServlet("/GetFavoreiteListServlet")
public class GetFavoreiteListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public GetFavoreiteListServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");

		PrintWriter out = response.getWriter();
		Gson gson = new GsonBuilder().create();
		
		String userId = request.getParameter("userId");
		
		FavoriteDAO dao = new FavoriteDAO();
		List<FavoriteVO> list = dao.getFavoriteVO(userId);

		out.println(gson.toJson(list));

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
