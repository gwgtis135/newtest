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

import minpro.DAO.rest;
import minpro.DAO.restDAO;

/**
 * Servlet implementation class InsertrestServ
 */
@WebServlet("/addrestServ")
public class addrestServ extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public addrestServ() {
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
		response.getWriter().append("Served at: ").append(request.getContextPath());
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
		rest rs = new rest();
		rs.setCorr(Integer.parseInt(request.getParameter("corr")));
		rs.setName(request.getParameter("name"));
		rs.setImage_loc(request.getParameter("imgloc"));
		rs.setOff_hours(request.getParameter("offhours"));
		rs.setAddr(request.getParameter("addr"));
		rs.setPhone_number(request.getParameter("phone"));
		rs.setPark(request.getParameter("park"));
		PrintWriter out = response.getWriter();
		Gson gson = new GsonBuilder().create();

		restDAO dao = new restDAO();
		dao.insertRest(rs);
		out.println(gson.toJson(rs));
	}

}
