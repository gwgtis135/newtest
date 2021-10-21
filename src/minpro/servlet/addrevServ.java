package minpro.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import minpro.DAO.review;
import minpro.DAO.reviewDAO;

/**
 * Servlet implementation class insertreview
 */
@WebServlet("/addrevServ")
public class addrevServ extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public addrevServ() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		String id = request.getParameter("id");
		String content = request.getParameter("content");
		int grade = Integer.parseInt(request.getParameter("grade"));
		int restid = Integer.parseInt(request.getParameter("restid"));
		review rev = new review();
		rev.setId(id);
		rev.setContent(content);
		rev.setGrade(grade);
		rev.setRestid(restid);
		PrintWriter out = response.getWriter();
		Gson gson = new GsonBuilder().create();

		reviewDAO dao = new reviewDAO();
		dao.insertrev(rev);
		out.println(gson.toJson(rev));
	}

}
