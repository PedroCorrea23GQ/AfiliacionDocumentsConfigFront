<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<%@ include file="/init.jsp" %>

<div class="dashboard-config">
    <div class="header-container">
        <span class="title-documentsConfig">Configurador de documentos</span>
    </div>
    <div class="table-container">
        <div id="searchContainer" style="display: none;">
            <input type="text" class="table-search-input" placeholder="Buscar tipo de documento">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div id="gTableContainer"></div>
        <div id="spinner-loader" class="circulo-loading-body" style="display: none;">
            <%@ include file="/components/personalized/loader-spinner/loader-spinner.jsp" %>
        </div>
    </div>
</div>