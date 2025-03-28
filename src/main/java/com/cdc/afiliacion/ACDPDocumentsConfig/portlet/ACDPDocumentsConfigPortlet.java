package com.cdc.afiliacion.ACDPDocumentsConfig.portlet;

import com.cdc.afiliacion.ACDPDocumentsConfig.constants.ACDPDocumentsConfigPortletKeys;

import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import javax.portlet.Portlet;

import org.osgi.service.component.annotations.Component;

/**
 * @author Pedro David Lopez
 */
@Component(
	property = {
		"com.liferay.portlet.display-category=category.sample",
		"com.liferay.portlet.header-portlet-css=/css/main.css",
		"com.liferay.portlet.header-portlet-css=/pages/dashboardDocumentsConfig/dashboardDocumentsConfig.css",
		"com.liferay.portlet.header-portlet-css=/components/generics/genericTable/genericTable.css",
		"com.liferay.portlet.instanceable=true",
		"com.liferay.portlet.footer-portlet-javascript=/components/generics/genericTable/genericTable.js",
		"com.liferay.portlet.footer-portlet-javascript=/pages/dashboardDocumentsConfig/dashboardDocumentsConfig.js",
		"javax.portlet.display-name=ACDPDocumentsConfig",
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.view-template=/view.jsp",
		"javax.portlet.name=" + ACDPDocumentsConfigPortletKeys.ACDPDOCUMENTSCONFIG,
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user"
	},
	service = Portlet.class
)
public class ACDPDocumentsConfigPortlet extends MVCPortlet {
	private static final Log LOGGER = LogFactoryUtil.getLog(ACDPDocumentsConfigPortlet.class);
}