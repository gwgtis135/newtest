package co.yedam.newtest;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/signInServlet")
public class signInServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public signInServlet() {
    	
    }
  

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		String id = request.getParameter("userId");	//id?
		String pw = request.getParameter("userPw");	//id?
		//Cookie cookie = new Cookie("cname", "cvalue");
		//response.addCookie(cookie);	//response 객체에 담기 
		
		
		
		// {"retCode":"OK"} / {"retCode":"NG"}
				PrintWriter out = response.getWriter();
				
				signInDAO dao = signInDAO.getInstance();
				user us = new user();
				us = dao.checkId(id, pw);
				
				if(us != null) {
					// 입력한 아이디로 신규 생성.
//					HttpSession session = request.getSession();
					//session.setAttribute("user", dao.checkId(id, pw));

					out.println("{\"retCode\":\"OK\",\"userId\":\""+us.getUserId()+"\",\"userName\":\""+us.getUserName()+"\"}");
					
					
					
					
				} else {
					// 있거나 에러발생.
					out.println("{\"retCode\":\"NG\"}");
				}
		
		
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
