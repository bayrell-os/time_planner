"use strict;"
/*
 *  Bayrell Time Planner
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
*/
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
if (typeof Bayrell.TimePlanner.Admin == 'undefined') Bayrell.TimePlanner.Admin = {};
Bayrell.TimePlanner.Admin.AdminInfo = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.Admin.AdminInfo.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.Admin.AdminInfo.prototype.constructor = Bayrell.TimePlanner.Admin.AdminInfo;
Object.assign(Bayrell.TimePlanner.Admin.AdminInfo.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.Admin.AdminInfo)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.Admin.AdminInfo";
	},
});
Object.assign(Bayrell.TimePlanner.Admin.AdminInfo, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.Admin.AdminInfo,
{
	/**
 * Route Action
 * @return RenderContainer
 */
	MainPage: async function(ctx, container)
	{
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Index page");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "admin");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "Bayrell.TimePlanner.Admin.AdminInfo");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), new Runtime.Dict(ctx));
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	css: function(ctx, vars)
	{
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.content' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["content", this.getCssHash(ctx)].join(" "),"@elem_name":"content"}});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": "Admin info"});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner.Admin";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.Admin.AdminInfo";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.Admin.AdminInfo",
			"name": "Bayrell.TimePlanner.Admin.AdminInfo",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
			"MainPage",
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		if (field_name == "MainPage")
		{
			var Collection = Runtime.Collection;
			var Dict = Runtime.Dict;
			var IntrospectionInfo = Runtime.IntrospectionInfo;
			return new IntrospectionInfo(ctx, {
				"kind": IntrospectionInfo.ITEM_METHOD,
				"class_name": "Bayrell.TimePlanner.Admin.AdminInfo",
				"name": "MainPage",
				"annotations": Collection.from([
					new Runtime.Web.Route(ctx, Runtime.Dict.from({"uri":"/admin/info/","name":"app.admin.info"})),
				]),
			});
		}
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.Admin.AdminInfo);
window["Bayrell.TimePlanner.Admin.AdminInfo"] = Bayrell.TimePlanner.Admin.AdminInfo;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.Admin.AdminInfo;
"use strict;"
/*
 *  Bayrell Cloud OS
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
*/
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
if (typeof Bayrell.TimePlanner.Admin == 'undefined') Bayrell.TimePlanner.Admin = {};
Bayrell.TimePlanner.Admin.AdminProjects = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.Admin.AdminProjects.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.Admin.AdminProjects.prototype.constructor = Bayrell.TimePlanner.Admin.AdminProjects;
Object.assign(Bayrell.TimePlanner.Admin.AdminProjects.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.Admin.AdminProjects)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.Admin.AdminProjects";
	},
});
Object.assign(Bayrell.TimePlanner.Admin.AdminProjects, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.Admin.AdminProjects,
{
	/**
 * Route Action
 * @return RenderContainer
 */
	actionIndex: async function(ctx, container)
	{
		/* Create model */
		var page_model = new Bayrell.TimePlanner.Admin.AdminProjectsModel(ctx, Runtime.Dict.from({"crud":await Runtime.Web.CRUD.CrudPageModel.crudSearch(ctx, Runtime.Dict.from({"object_name":"Bayrell.TimePlanner.Admin.Project","interface_name":"core.crud","method_name":"search"}), container)}));
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Projects page");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "admin");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "Bayrell.TimePlanner.Admin.AdminProjects");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), page_model);
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	css: function(ctx, vars)
	{
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var struct = Runtime.Collection.from([new Runtime.Web.CRUD.FieldInfo(ctx, Runtime.Dict.from({"api_name":"project_id","primary":true})),new Runtime.Web.CRUD.FieldInfo(ctx, Runtime.Dict.from({"api_name":"number","label":"","class_name":"Runtime.Web.Input.Label","class_settings":Runtime.Dict.from({"render":(ctx, layout, model, params, content) => 
			{
				var table_model = Runtime.rtl.get(ctx, params, "table-model");
				var index = Runtime.rtl.get(ctx, params, "row-index");
				if (table_model)
				{
					return index + 1;
				}
				return "";
			}})})),new Runtime.Web.CRUD.FieldInfo(ctx, Runtime.Dict.from({"api_name":"project_name","label":"Name","class_name":"Runtime.Web.Input.Input","class_name_table":"Runtime.Web.Input.Label"})),new Runtime.Web.CRUD.FieldInfo(ctx, Runtime.Dict.from({"api_name":"edit-buttons","label":"","class_name":"Runtime.Web.Input.Label","class_settings":Runtime.Dict.from({"render":(ctx, layout, model, params, content) => 
			{
				return Runtime.Collection.from([Runtime.Web.CRUD.CrudPage.buttonEdit(ctx, layout, model, params, content),Runtime.Web.CRUD.CrudPage.buttonDelete(ctx, layout, model, params, content)]);
			}})}))]);
			
			var filter_fields = Runtime.Collection.from(["project_name"]);
			
			var form_fields = Runtime.Collection.from(["project_name"]);
			
			var table_fields = Runtime.Collection.from(["number","project_name","edit-buttons"]);
			
			var messages = Runtime.Dict.from({"add":ctx.translate(ctx, "Bayrell.CloudOS", "Add project"),"delete":(ctx, item) => 
			{
				return ctx.translate(ctx, "Runtime.Web.CRUD", "Do you realy want to delete '%name%' ?", Runtime.Dict.from({"name":Runtime.rtl.get(ctx, item, "project_name")}));
			}});
			
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": "Runtime.Web.CRUD.CrudPage","attrs": {"@name":["Bayrell.TimePlanner.Admin.AdminProjects","crud"],"object_name":"Bayrell.TimePlanner.Admin.Project","struct":struct,"filter_fields":filter_fields,"form_fields":form_fields,"table_fields":table_fields,"messages":messages,"dialog_form":Runtime.Dict.from({})}, "layout": layout});
			
			return __control_childs;
		};
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Runtime.Web.CRUD.CrudPage","Runtime.Web.Input.Input","Runtime.Web.Input.Label","Runtime.Web.Input.Select","Runtime.Web.Input.SelectText","Runtime.Web.Input.TextArea"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner.Admin";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.Admin.AdminProjects";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.Admin.AdminProjects",
			"name": "Bayrell.TimePlanner.Admin.AdminProjects",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
			"actionIndex",
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		if (field_name == "actionIndex")
		{
			var Collection = Runtime.Collection;
			var Dict = Runtime.Dict;
			var IntrospectionInfo = Runtime.IntrospectionInfo;
			return new IntrospectionInfo(ctx, {
				"kind": IntrospectionInfo.ITEM_METHOD,
				"class_name": "Bayrell.TimePlanner.Admin.AdminProjects",
				"name": "actionIndex",
				"annotations": Collection.from([
					new Runtime.Web.Route(ctx, Runtime.Dict.from({"uri":"/admin/projects/","name":"app.admin.projects"})),
					new Runtime.Web.RouteMiddleware(ctx, Runtime.Dict.from({"value":"Runtime.Web.Auth.AuthFrontend::checkAuthMiddleware"})),
				]),
			});
		}
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.Admin.AdminProjects);
window["Bayrell.TimePlanner.Admin.AdminProjects"] = Bayrell.TimePlanner.Admin.AdminProjects;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.Admin.AdminProjects;
"use strict;"
/*!
 *  Bayrell Cloud OS
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
if (typeof Bayrell.TimePlanner.Admin == 'undefined') Bayrell.TimePlanner.Admin = {};
Bayrell.TimePlanner.Admin.AdminProjectsModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.TimePlanner.Admin.AdminProjectsModel.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.TimePlanner.Admin.AdminProjectsModel.prototype.constructor = Bayrell.TimePlanner.Admin.AdminProjectsModel;
Object.assign(Bayrell.TimePlanner.Admin.AdminProjectsModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.crud = null;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.Admin.AdminProjectsModel)
		{
			this.crud = o.crud;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "crud")this.crud = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "crud")return this.crud;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.Admin.AdminProjectsModel";
	},
});
Object.assign(Bayrell.TimePlanner.Admin.AdminProjectsModel, Runtime.BaseStruct);
Object.assign(Bayrell.TimePlanner.Admin.AdminProjectsModel,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner.Admin";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.Admin.AdminProjectsModel";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.Admin.AdminProjectsModel",
			"name": "Bayrell.TimePlanner.Admin.AdminProjectsModel",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("crud");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "crud") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.TimePlanner.Admin.AdminProjectsModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.Admin.AdminProjectsModel);
window["Bayrell.TimePlanner.Admin.AdminProjectsModel"] = Bayrell.TimePlanner.Admin.AdminProjectsModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.Admin.AdminProjectsModel;
"use strict;"
/*
 *  Bayrell Cloud OS
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
*/
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
if (typeof Bayrell.TimePlanner.Tasks == 'undefined') Bayrell.TimePlanner.Tasks = {};
Bayrell.TimePlanner.Tasks.TasksPage = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.Tasks.TasksPage.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.Tasks.TasksPage.prototype.constructor = Bayrell.TimePlanner.Tasks.TasksPage;
Object.assign(Bayrell.TimePlanner.Tasks.TasksPage.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.Tasks.TasksPage)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.Tasks.TasksPage";
	},
});
Object.assign(Bayrell.TimePlanner.Tasks.TasksPage, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.Tasks.TasksPage,
{
	css: function(ctx, vars)
	{
	},
	/**
 * Route Action
 * @return RenderContainer
 */
	actionIndex: async function(ctx, container)
	{
		/* Create model */
		var page_model = new Bayrell.TimePlanner.Tasks.TasksPageModel(ctx, Runtime.Dict.from({"crud":await Runtime.Web.CRUD.CrudPageModel.crudSearch(ctx, Runtime.Dict.from({"object_name":"Bayrell.TimePlanner.Task","interface_name":"core.crud","method_name":"search"}), container)}));
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Tasks");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "admin");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "Bayrell.TimePlanner.Tasks.TasksPage");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), page_model);
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var __v0 = new Runtime.Monad(ctx, model.crud);
			__v0 = __v0.attr(ctx, "foreigns");
			__v0 = __v0.attr(ctx, "projects");
			__v0 = __v0.attr(ctx, "options");
			__v0 = __v0.call(ctx, Runtime.lib.map(ctx, (ctx, item) => 
			{
				return Runtime.Dict.from({"id":Runtime.rtl.get(ctx, item, "project_id"),"value":Runtime.rtl.get(ctx, item, "project_name"),"item":item});
			}));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "Runtime.Collection", Runtime.Collection.from([])));
			var projects = __v0.value(ctx);
			
			var struct = Runtime.Collection.from([new Runtime.Web.CRUD.FieldInfo(ctx, Runtime.Dict.from({"api_name":"task_id","primary":true})),new Runtime.Web.CRUD.FieldInfo(ctx, Runtime.Dict.from({"api_name":"number","label":"","class_name":"Runtime.Web.Input.Label","class_settings":Runtime.Dict.from({"render":Runtime.Web.CRUD.CrudPage.fieldNumber})})),new Runtime.Web.CRUD.FieldInfo(ctx, Runtime.Dict.from({"api_name":"task_name","label":"Task name","class_name":"Runtime.Web.Input.Input","class_name_table":"Runtime.Web.Input.Label"})),new Runtime.Web.CRUD.FieldInfo(ctx, Runtime.Dict.from({"api_name":"project_id","label":"Project","class_name":"Runtime.Web.Input.Select","class_name_table":"Runtime.Web.Input.SelectText","class_settings":Runtime.Dict.from({"show_select_value_filter":true,"show_select_value":true,"options":projects})})),new Runtime.Web.CRUD.FieldInfo(ctx, Runtime.Dict.from({"api_name":"edit-buttons","label":"","class_name":"Runtime.Web.Input.Label","class_settings":Runtime.Dict.from({"render":(ctx, layout, model, params, content) => 
			{
				return Runtime.Collection.from([Runtime.Web.CRUD.CrudPage.buttonEdit(ctx, layout, model, params, content),Runtime.Web.CRUD.CrudPage.buttonDelete(ctx, layout, model, params, content)]);
			}})}))]);
			
			var filter_fields = Runtime.Collection.from(["project_id","task_name"]);
			
			var form_fields = Runtime.Collection.from(["project_id","task_name"]);
			
			var table_fields = Runtime.Collection.from(["number","project_id","task_name","edit-buttons"]);
			
			var messages = Runtime.Dict.from({"add":ctx.translate(ctx, "Bayrell.CloudOS", "Add task"),"delete":(ctx, item) => 
			{
				return ctx.translate(ctx, "Runtime.Web.CRUD", "Do you realy want to delete '%name%' ?", Runtime.Dict.from({"name":Runtime.rtl.get(ctx, item, "task_name")}));
			}});
			
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": "Runtime.Web.CRUD.CrudPage","attrs": {"@name":["Bayrell.TimePlanner.Tasks.TasksPage","crud"],"object_name":"Bayrell.TimePlanner.Task","struct":struct,"filter_fields":filter_fields,"form_fields":form_fields,"table_fields":table_fields,"messages":messages}, "layout": layout});
			
			return __control_childs;
		};
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Runtime.Web.CRUD.CrudPage","Runtime.Web.Input.Input","Runtime.Web.Input.Label","Runtime.Web.Input.Select","Runtime.Web.Input.SelectText","Runtime.Web.Input.TextArea"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner.Tasks";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.Tasks.TasksPage";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.Tasks.TasksPage",
			"name": "Bayrell.TimePlanner.Tasks.TasksPage",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
			"actionIndex",
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		if (field_name == "actionIndex")
		{
			var Collection = Runtime.Collection;
			var Dict = Runtime.Dict;
			var IntrospectionInfo = Runtime.IntrospectionInfo;
			return new IntrospectionInfo(ctx, {
				"kind": IntrospectionInfo.ITEM_METHOD,
				"class_name": "Bayrell.TimePlanner.Tasks.TasksPage",
				"name": "actionIndex",
				"annotations": Collection.from([
					new Runtime.Web.Route(ctx, Runtime.Dict.from({"uri":"/tasks/","name":"app.tasks"})),
					new Runtime.Web.RouteMiddleware(ctx, Runtime.Dict.from({"value":"Runtime.Web.Auth.AuthFrontend::checkAuthMiddleware"})),
				]),
			});
		}
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.Tasks.TasksPage);
window["Bayrell.TimePlanner.Tasks.TasksPage"] = Bayrell.TimePlanner.Tasks.TasksPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.Tasks.TasksPage;
"use strict;"
/*!
 *  Bayrell Cloud OS
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
if (typeof Bayrell.TimePlanner.Tasks == 'undefined') Bayrell.TimePlanner.Tasks = {};
Bayrell.TimePlanner.Tasks.TasksPageModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.TimePlanner.Tasks.TasksPageModel.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.TimePlanner.Tasks.TasksPageModel.prototype.constructor = Bayrell.TimePlanner.Tasks.TasksPageModel;
Object.assign(Bayrell.TimePlanner.Tasks.TasksPageModel.prototype,
{
	_init: function(ctx)
	{
		var defProp = use('Runtime.rtl').defProp;
		var a = Object.getOwnPropertyNames(this);
		this.crud = null;
		Runtime.BaseStruct.prototype._init.call(this,ctx);
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.Tasks.TasksPageModel)
		{
			this.crud = o.crud;
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		if (k == "crud")this.crud = v;
		else Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		if (k == "crud")return this.crud;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.Tasks.TasksPageModel";
	},
});
Object.assign(Bayrell.TimePlanner.Tasks.TasksPageModel, Runtime.BaseStruct);
Object.assign(Bayrell.TimePlanner.Tasks.TasksPageModel,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner.Tasks";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.Tasks.TasksPageModel";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.Tasks.TasksPageModel",
			"name": "Bayrell.TimePlanner.Tasks.TasksPageModel",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		if ((f|3)==3)
		{
			a.push("crud");
		}
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		if (field_name == "crud") return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_FIELD,
			"class_name": "Bayrell.TimePlanner.Tasks.TasksPageModel",
			"name": field_name,
			"annotations": Collection.from([
			]),
		});
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.Tasks.TasksPageModel);
window["Bayrell.TimePlanner.Tasks.TasksPageModel"] = Bayrell.TimePlanner.Tasks.TasksPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.Tasks.TasksPageModel;
"use strict;"
/*
 *  Bayrell Time Planner
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
*/
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
Bayrell.TimePlanner.AdminLayout = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.AdminLayout.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.AdminLayout.prototype.constructor = Bayrell.TimePlanner.AdminLayout;
Object.assign(Bayrell.TimePlanner.AdminLayout.prototype,
{
	/**
 * Top button click
 */
	onTopButtonClick: async function(ctx, msg)
	{
		/*
	Dict tag = e["target"]["params"]["@tag"];
	string class_name = tag["component"];
	string method_name = tag["onClick"];
	Component c = this.driver.findComponents(class_name)[0];
	fn f = rtl::method(c, method_name);
	await f(e);
	*/
	},
	/**
 * Log out click
 */
	onLogoutClick: async function(ctx, msg)
	{
		/*
	this.driver.updateModelValue
	(
		["storage", static::getCurrentClassName(), "logout_message"],
		_("Runtime.Web.CRUD", "Please wait ...")
	);
	
	MessageRPC msg = @
		-> method getProvider(RuntimeConstant::BUS_INTERFACE)
		-> await method post
		{
			"url": "/api/logout/",
		}
		-> lib::createStruct(classof MessageRPC)
	;
	
	bool is_success = msg -> method isSuccess;
	this.driver.updateModelValue
	(
		["storage", static::getCurrentClassName(), "logout_message"],
		is_success ? msg -> attr "success_message" : msg -> attr "error"
	);
	
	if (is_success)
	{
		this.driver.reloadPage();
	}
	*/
	},
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.AdminLayout)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.AdminLayout";
	},
});
Object.assign(Bayrell.TimePlanner.AdminLayout, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.AdminLayout,
{
	css: function(ctx, vars)
	{
		return "*{" + Runtime.rtl.toStr("box-sizing: border-box;") + Runtime.rtl.toStr("}body{") + Runtime.rtl.toStr("margin:0;padding:0;") + Runtime.rtl.toStr("}a {") + Runtime.rtl.toStr(" text-decoration: inherit; color: #0000d0; cursor: pointer; ") + Runtime.rtl.toStr("}a:hover, a:visited:hover {") + Runtime.rtl.toStr(" text-decoration: underline; color: red; ") + Runtime.rtl.toStr("}a:visited {") + Runtime.rtl.toStr(" text-decoration: inherit; color: #0000d0; ") + Runtime.rtl.toStr("}a.link {") + Runtime.rtl.toStr(" text-decoration: none; color: #0000d0; cursor: pointer; ") + Runtime.rtl.toStr("}a.link:hover, a.link:visited:hover {") + Runtime.rtl.toStr(" text-decoration: underline; color: red; ") + Runtime.rtl.toStr("}a.link:visited {") + Runtime.rtl.toStr(" text-decoration: none; color: #0000d0; ") + Runtime.rtl.toStr("}body, html{") + Runtime.rtl.toStr("font-family: 'Ubuntu', sans-serif;font-size: 14px;width: 100%;padding: 0;margin: 0;") + Runtime.rtl.toStr("}td, th{") + Runtime.rtl.toStr("font-family: 'Ubuntu', sans-serif;font-size: 14px;") + Runtime.rtl.toStr("}span.lpad5{") + Runtime.rtl.toStr("display: inline-block;padding-right: 5px;") + Runtime.rtl.toStr("}.layout.h-3a49{") + Runtime.rtl.toStr("height: 100%;") + Runtime.rtl.toStr("}.layout_wrap.h-3a49{") + Runtime.rtl.toStr("position: relative;display: flex;align-items: stretch;min-height: calc(100% - 25px);") + Runtime.rtl.toStr("}.layout_footer.h-3a49{") + Runtime.rtl.toStr("position: relative;width: 100%;height: 24px;border-top: 1px #ccc solid;background-color: white;font-size: 12px;") + Runtime.rtl.toStr("}.layout_footer.h-3a49 .b_in{") + Runtime.rtl.toStr("}.layout_menu_wrap.h-3a49{") + Runtime.rtl.toStr("position: relative;width: 200px;") + Runtime.rtl.toStr("}.layout_content_wrap.h-3a49{") + Runtime.rtl.toStr("position: relative;width: calc(100% - 200px);padding-bottom: 10px;") + Runtime.rtl.toStr("}.layout_site_name.h-3a49, .layout_title_wrap.h-3a49{") + Runtime.rtl.toStr("font-size: 16px;height: 40px;") + Runtime.rtl.toStr("}.layout_site_name.h-3a49, .layout_title_wrap.h-3a49, .layout_page.h-3a49, .layout_content.h-3a49{") + Runtime.rtl.toStr("padding: 10px;") + Runtime.rtl.toStr("}.layout_site_name.h-3a49{") + Runtime.rtl.toStr("border-right: 1px #ccc solid;") + Runtime.rtl.toStr("}.layout_title_wrap.h-3a49{") + Runtime.rtl.toStr("display: flex;align-items: stretch;") + Runtime.rtl.toStr("}.layout_title.h-3a49{") + Runtime.rtl.toStr("width: 350px;") + Runtime.rtl.toStr("}.layout_top_buttons.h-3a49{") + Runtime.rtl.toStr("width: calc(100% - 350px);padding-left: 10px;") + Runtime.rtl.toStr("}.layout_content.h-3a49{") + Runtime.rtl.toStr("position: relative;height: calc(100% - 45px);padding-bottom: 0;padding-right: 0;") + Runtime.rtl.toStr("}.layout_menu_label.h-3a49{") + Runtime.rtl.toStr("font-size: 14px;font-weight: bold;padding: 10px;") + Runtime.rtl.toStr("}.layout_menu.h-3a49{") + Runtime.rtl.toStr("position: relative;height: calc(100% - 40px);overflow-y: auto;border-right: 1px #ccc solid;") + Runtime.rtl.toStr("}.layout_menu_items.h-3a49{") + Runtime.rtl.toStr("}.layout_menu_items.h-3a49 ul, .layout_menu_items.h-3a49 li{") + Runtime.rtl.toStr("padding: 0; margin: 0;list-style: none;") + Runtime.rtl.toStr("}.layout_menu_items.h-3a49 ul{") + Runtime.rtl.toStr("}.layout_menu_items.h-3a49 li{") + Runtime.rtl.toStr("background-color: white;") + Runtime.rtl.toStr("}.layout_menu_items.h-3a49 li:hover{") + Runtime.rtl.toStr("background-color: " + Runtime.rtl.toStr(Runtime.rtl.attr(ctx, vars, ["colors", "default", "hover-background"])) + Runtime.rtl.toStr(";")) + Runtime.rtl.toStr("}.layout_menu_items.h-3a49 li a{") + Runtime.rtl.toStr("display: block;padding: 10px 15px;border-bottom: 1px solid #e7e7e7;") + Runtime.rtl.toStr("}.layout_menu_items.h-3a49 li.active > a, .layout_menu_items.h-3a49 li.active > a:hover{") + Runtime.rtl.toStr("background-color: #337ab7;border-color: #337ab7;color: white;") + Runtime.rtl.toStr("}.layout_menu_logout.h-3a49{") + Runtime.rtl.toStr("text-align: center;padding-top: 100px;") + Runtime.rtl.toStr("}.layout_menu_logout.h-3a49 > div{") + Runtime.rtl.toStr("padding-top: 5px;") + Runtime.rtl.toStr("}");
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, layout.keep_data, "Runtime.Web.Auth.AuthToken"));
			__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "Runtime.Web.Auth.AuthToken", null));
			var auth_token = __v0.value(ctx);
			
			if (auth_token)
			{
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": this.renderAuth(ctx, layout, model, params, content)});
			}
			else
			{
				/* Text */
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": this.renderGuest(ctx, layout, model, params, content)});
			}
			
			return __control_childs;
		};
	},
	renderGuest: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var class_name = model.page_class;
			
			if (!Runtime.rtl.isEmpty(ctx, class_name))
			{
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": class_name,"attrs": {"@bind":["Bayrell.TimePlanner.AdminLayout","page_model"],"@key":"view"}, "layout": layout});
			}
			
			return __control_childs;
		};
	},
	renderAuth: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var class_name = model.page_class;
			
			/* Element 'div.layout' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["layout", this.getCssHash(ctx)].join(" "),"@elem_name":"layout"}});
			
			/* Element 'div.layout_wrap' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["layout_wrap", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_wrap"}});
			
			/* Element 'div.layout_menu_wrap' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "div","attrs": {"class":["layout_menu_wrap", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_menu_wrap"}});
			
			/* Element 'div.layout_site_name' */
			var __v3; var __v3_childs = [];
			[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "div","attrs": {"class":["layout_site_name", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_site_name"}});
			
			/* Element 'a.nolink' */
			var __v4; var __v4_childs = [];
			[__v4, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "a","attrs": {"href":"/","class":["nolink", this.getCssHash(ctx)].join(" "),"@elem_name":"nolink"}});
			
			/* Text */
			[__vnull, __v4_childs] = RenderDriver.e(__v4, __v4_childs, "text", {"content": ctx.translate(ctx, "Bayrell.TimePlanner", "Time planner")});
			RenderDriver.p(__v4, __v4_childs);
			RenderDriver.p(__v3, __v3_childs);
			
			/* Element 'div.layout_menu' */
			var __v3; var __v3_childs = [];
			[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "div","attrs": {"class":["layout_menu", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_menu"}});
			
			/* Element 'div.layout_menu_label' */
			var __v4; var __v4_childs = [];
			[__v4, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "div","attrs": {"class":["layout_menu_label", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_menu_label"}});
			
			/* Text */
			[__vnull, __v4_childs] = RenderDriver.e(__v4, __v4_childs, "text", {"content": ctx.translate(ctx, "Bayrell.TimePlanner", "Dashboard")});
			RenderDriver.p(__v4, __v4_childs);
			
			/* Element 'div.layout_menu_items' */
			var __v4; var __v4_childs = [];
			[__v4, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "div","attrs": {"class":["layout_menu_items", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_menu_items"}});
			
			/* Element 'ul' */
			var __v5; var __v5_childs = [];
			[__v5, __v4_childs] = RenderDriver.e(__v4, __v4_childs, "element", {"name": "ul","attrs": {}});
			
			/* Element 'li' */
			var __v6; var __v6_childs = [];
			[__v6, __v5_childs] = RenderDriver.e(__v5, __v5_childs, "element", {"name": "li","attrs": {"class":[((Runtime.rs.start(ctx, Runtime.rtl.attr(ctx, layout, ["route", "name"]), "app.index")) ? ("active") : ("")), this.getCssHash(ctx)].join(" ")}});
			
			/* Element 'a.nolink' */
			var __v7; var __v7_childs = [];
			[__v7, __v6_childs] = RenderDriver.e(__v6, __v6_childs, "element", {"name": "a","attrs": {"href":layout.route_prefix + Runtime.rtl.toStr("/"),"class":["nolink", this.getCssHash(ctx)].join(" "),"@elem_name":"nolink"}});
			
			/* Text */
			[__vnull, __v7_childs] = RenderDriver.e(__v7, __v7_childs, "text", {"content": ctx.translate(ctx, "Bayrell.TimePlanner", "Dashboard")});
			RenderDriver.p(__v7, __v7_childs);
			RenderDriver.p(__v6, __v6_childs);
			
			/* Element 'li' */
			var __v6; var __v6_childs = [];
			[__v6, __v5_childs] = RenderDriver.e(__v5, __v5_childs, "element", {"name": "li","attrs": {"class":[((Runtime.rs.start(ctx, Runtime.rtl.attr(ctx, layout, ["route", "name"]), "app.tasks")) ? ("active") : ("")), this.getCssHash(ctx)].join(" ")}});
			
			/* Element 'a.nolink' */
			var __v7; var __v7_childs = [];
			[__v7, __v6_childs] = RenderDriver.e(__v6, __v6_childs, "element", {"name": "a","attrs": {"href":layout.route_prefix + Runtime.rtl.toStr("/tasks/"),"class":["nolink", this.getCssHash(ctx)].join(" "),"@elem_name":"nolink"}});
			
			/* Text */
			[__vnull, __v7_childs] = RenderDriver.e(__v7, __v7_childs, "text", {"content": ctx.translate(ctx, "Bayrell.TimePlanner", "Find task")});
			RenderDriver.p(__v7, __v7_childs);
			RenderDriver.p(__v6, __v6_childs);
			RenderDriver.p(__v5, __v5_childs);
			RenderDriver.p(__v4, __v4_childs);
			
			/* Element 'div.layout_menu_label' */
			var __v4; var __v4_childs = [];
			[__v4, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "div","attrs": {"class":["layout_menu_label", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_menu_label"}});
			
			/* Text */
			[__vnull, __v4_childs] = RenderDriver.e(__v4, __v4_childs, "text", {"content": ctx.translate(ctx, "Bayrell.TimePlanner", "Admin")});
			RenderDriver.p(__v4, __v4_childs);
			
			/* Element 'div.layout_menu_items' */
			var __v4; var __v4_childs = [];
			[__v4, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "div","attrs": {"class":["layout_menu_items", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_menu_items"}});
			
			/* Element 'ul' */
			var __v5; var __v5_childs = [];
			[__v5, __v4_childs] = RenderDriver.e(__v4, __v4_childs, "element", {"name": "ul","attrs": {}});
			
			/* Element 'li' */
			var __v6; var __v6_childs = [];
			[__v6, __v5_childs] = RenderDriver.e(__v5, __v5_childs, "element", {"name": "li","attrs": {"class":[((Runtime.rs.start(ctx, Runtime.rtl.attr(ctx, layout, ["route", "name"]), "app.admin.projects")) ? ("active") : ("")), this.getCssHash(ctx)].join(" ")}});
			
			/* Element 'a.nolink' */
			var __v7; var __v7_childs = [];
			[__v7, __v6_childs] = RenderDriver.e(__v6, __v6_childs, "element", {"name": "a","attrs": {"href":layout.route_prefix + Runtime.rtl.toStr("/admin/projects/"),"class":["nolink", this.getCssHash(ctx)].join(" "),"@elem_name":"nolink"}});
			
			/* Text */
			[__vnull, __v7_childs] = RenderDriver.e(__v7, __v7_childs, "text", {"content": ctx.translate(ctx, "Bayrell.TimePlanner", "Projects settings")});
			RenderDriver.p(__v7, __v7_childs);
			RenderDriver.p(__v6, __v6_childs);
			
			/* Element 'li' */
			var __v6; var __v6_childs = [];
			[__v6, __v5_childs] = RenderDriver.e(__v5, __v5_childs, "element", {"name": "li","attrs": {"class":[((Runtime.rs.start(ctx, Runtime.rtl.attr(ctx, layout, ["route", "name"]), "app.admin.info")) ? ("active") : ("")), this.getCssHash(ctx)].join(" ")}});
			
			/* Element 'a.nolink' */
			var __v7; var __v7_childs = [];
			[__v7, __v6_childs] = RenderDriver.e(__v6, __v6_childs, "element", {"name": "a","attrs": {"href":layout.route_prefix + Runtime.rtl.toStr("/admin/info/"),"class":["nolink", this.getCssHash(ctx)].join(" "),"@elem_name":"nolink"}});
			
			/* Text */
			[__vnull, __v7_childs] = RenderDriver.e(__v7, __v7_childs, "text", {"content": ctx.translate(ctx, "Bayrell.TimePlanner", "Admin info")});
			RenderDriver.p(__v7, __v7_childs);
			RenderDriver.p(__v6, __v6_childs);
			RenderDriver.p(__v5, __v5_childs);
			RenderDriver.p(__v4, __v4_childs);
			
			[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "div","attrs": {"class":["layout_menu_logout", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_menu_logout"}});
			RenderDriver.p(__v3, __v3_childs);
			RenderDriver.p(__v2, __v2_childs);
			
			/* Element 'div.layout_content_wrap' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "div","attrs": {"class":["layout_content_wrap", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_content_wrap"}});
			
			/* Element 'div.layout_title_wrap' */
			var __v3; var __v3_childs = [];
			[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "div","attrs": {"class":["layout_title_wrap", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_title_wrap"}});
			
			/* Element 'div.layout_title' */
			var __v4; var __v4_childs = [];
			[__v4, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "div","attrs": {"class":["layout_title", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_title"}});
			
			/* Text */
			[__vnull, __v4_childs] = RenderDriver.e(__v4, __v4_childs, "text", {"content": model.title});
			RenderDriver.p(__v4, __v4_childs);
			
			/* Element 'div.layout_top_buttons' */
			var __v4; var __v4_childs = [];
			[__v4, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "element", {"name": "div","attrs": {"class":["layout_top_buttons", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_top_buttons"}});
			
			var __v5 = new Runtime.Monad(ctx, layout);
			__v5 = __v5.attr(ctx, "data");
			__v5 = __v5.attr(ctx, "Bayrell.TimePlanner.Layout.TopButtons");
			__v5 = __v5.monad(ctx, Runtime.rtl.m_to(ctx, "Runtime.Collection", Runtime.Collection.from([])));
			var top_buttons = __v5.value(ctx);
			
			if (Runtime.rtl.exists(ctx, top_buttons))
			{
				for (var i = 0;i < top_buttons.count(ctx);i++)
				{
					var button = Runtime.rtl.get(ctx, top_buttons, i);
					
					/* Component 'Button' */
					[__vnull, __v4_childs] = RenderDriver.e(__v4, __v4_childs, "component", {"name": "Runtime.Web.Button.Button","attrs": {"@event:Runtime.Web.Events.MouseClickEvent":["Bayrell.TimePlanner.AdminLayout","onTopButtonClick"],"@tag":button}, "layout": layout, "content": (__control) =>
					{
						var __vnull = null;
						var __control_childs = [];
						
						/* Text */
						[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": Runtime.rtl.get(ctx, button, "label")});
						
						return __control_childs;
					}});
				}
			}
			RenderDriver.p(__v4, __v4_childs);
			RenderDriver.p(__v3, __v3_childs);
			
			/* Element 'div.layout_content' */
			var __v3; var __v3_childs = [];
			[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "div","attrs": {"class":["layout_content", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_content"}});
			
			if (!Runtime.rtl.isEmpty(ctx, class_name))
			{
				[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "component", {"name": class_name,"attrs": {"@bind":["Bayrell.TimePlanner.AdminLayout","page_model"],"@key":"view"}, "layout": layout});
			}
			RenderDriver.p(__v3, __v3_childs);
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v1, __v1_childs);
			
			/* Element 'div.layout_footer' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "div","attrs": {"class":["layout_footer", this.getCssHash(ctx)].join(" "),"@elem_name":"layout_footer"}});
			
			/* Element 'div.b_out' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "div","attrs": {"class":["b_out", this.getCssHash(ctx)].join(" "),"@elem_name":"b_out"}});
			
			/* Element 'div.b_in' */
			var __v3; var __v3_childs = [];
			[__v3, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "element", {"name": "div","attrs": {"class":["b_in", this.getCssHash(ctx)].join(" "),"@elem_name":"b_in"}});
			
			/* Text */
			[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": "(c) BAYRELL Time Planner 2020 \"Ildar Bikmamatov\" <support@bayrell.org>"});
			
			/* Text */
			[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": ".\n\t\t\t\tVersion: "});
			
			/* Text */
			[__vnull, __v3_childs] = RenderDriver.e(__v3, __v3_childs, "text", {"content": Bayrell.TimePlanner.ModuleDescription.getModuleVersion(ctx)});
			RenderDriver.p(__v3, __v3_childs);
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Runtime.Web.Button.Button"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.AdminLayout";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.AdminLayout",
			"name": "Bayrell.TimePlanner.AdminLayout",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.AdminLayout);
window["Bayrell.TimePlanner.AdminLayout"] = Bayrell.TimePlanner.AdminLayout;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.AdminLayout;
"use strict;"
/*
 *  Bayrell Time Planner
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
*/
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
Bayrell.TimePlanner.DefaultLayout = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.DefaultLayout.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.DefaultLayout.prototype.constructor = Bayrell.TimePlanner.DefaultLayout;
Object.assign(Bayrell.TimePlanner.DefaultLayout.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.DefaultLayout)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.DefaultLayout";
	},
});
Object.assign(Bayrell.TimePlanner.DefaultLayout, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.DefaultLayout,
{
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			var class_name = model.page_class;
			
			if (!Runtime.rtl.isEmpty(ctx, class_name))
			{
				[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "component", {"name": class_name,"attrs": {"@bind":["Bayrell.TimePlanner.DefaultLayout","page_model"],"@key":"view"}, "layout": layout});
			}
			
			return __control_childs;
		};
	},
	components: function(ctx)
	{
		return Runtime.Collection.from(["Runtime.Web.Button.Button"]);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.DefaultLayout";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.DefaultLayout",
			"name": "Bayrell.TimePlanner.DefaultLayout",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.DefaultLayout);
window["Bayrell.TimePlanner.DefaultLayout"] = Bayrell.TimePlanner.DefaultLayout;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.DefaultLayout;
"use strict;"
/*
 *  Bayrell Time Planner
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
*/
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
Bayrell.TimePlanner.MainPage = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.MainPage.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.MainPage.prototype.constructor = Bayrell.TimePlanner.MainPage;
Object.assign(Bayrell.TimePlanner.MainPage.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.MainPage)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.MainPage";
	},
});
Object.assign(Bayrell.TimePlanner.MainPage, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.MainPage,
{
	/**
 * Route Action
 * @return RenderContainer
 */
	MainPage: async function(ctx, container)
	{
		/* Set page model */
		var page_model = new Bayrell.TimePlanner.MainPageModel(ctx, Runtime.Dict.from({}));
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Index page");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "admin");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "Bayrell.TimePlanner.MainPage");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), page_model);
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	css: function(ctx, vars)
	{
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'div.content' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "div","attrs": {"class":["content", this.getCssHash(ctx)].join(" "),"@elem_name":"content"}});
			
			/* Text */
			[__vnull, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "text", {"content": "Hello"});
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.MainPage";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.MainPage",
			"name": "Bayrell.TimePlanner.MainPage",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
			"MainPage",
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		if (field_name == "MainPage")
		{
			var Collection = Runtime.Collection;
			var Dict = Runtime.Dict;
			var IntrospectionInfo = Runtime.IntrospectionInfo;
			return new IntrospectionInfo(ctx, {
				"kind": IntrospectionInfo.ITEM_METHOD,
				"class_name": "Bayrell.TimePlanner.MainPage",
				"name": "MainPage",
				"annotations": Collection.from([
					new Runtime.Web.Route(ctx, Runtime.Dict.from({"uri":"/","name":"app.main"})),
				]),
			});
		}
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.MainPage);
window["Bayrell.TimePlanner.MainPage"] = Bayrell.TimePlanner.MainPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.MainPage;
"use strict;"
/*!
 *  Bayrell Time Planner
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
Bayrell.TimePlanner.MainPageModel = function(ctx)
{
	Runtime.BaseStruct.apply(this, arguments);
};
Bayrell.TimePlanner.MainPageModel.prototype = Object.create(Runtime.BaseStruct.prototype);
Bayrell.TimePlanner.MainPageModel.prototype.constructor = Bayrell.TimePlanner.MainPageModel;
Object.assign(Bayrell.TimePlanner.MainPageModel.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.MainPageModel)
		{
		}
		Runtime.BaseStruct.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.BaseStruct.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.BaseStruct.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.MainPageModel";
	},
});
Object.assign(Bayrell.TimePlanner.MainPageModel, Runtime.BaseStruct);
Object.assign(Bayrell.TimePlanner.MainPageModel,
{
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.MainPageModel";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseStruct";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.MainPageModel",
			"name": "Bayrell.TimePlanner.MainPageModel",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.MainPageModel);
window["Bayrell.TimePlanner.MainPageModel"] = Bayrell.TimePlanner.MainPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.MainPageModel;
"use strict;"
/*
 *  Bayrell Time Planner
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
*/
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
Bayrell.TimePlanner.Page404 = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.Page404.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.Page404.prototype.constructor = Bayrell.TimePlanner.Page404;
Object.assign(Bayrell.TimePlanner.Page404.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.Page404)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.Page404";
	},
});
Object.assign(Bayrell.TimePlanner.Page404, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.Page404,
{
	css: function(ctx, vars)
	{
	},
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Text */
			[__vnull, __control_childs] = RenderDriver.e(__control, __control_childs, "text", {"content": ctx.translate(ctx, "Bayrell.TimePlanner", "Page not found")});
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.Page404";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.Page404",
			"name": "Bayrell.TimePlanner.Page404",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.Page404);
window["Bayrell.TimePlanner.Page404"] = Bayrell.TimePlanner.Page404;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.Page404;
"use strict;"
/*
 *  Bayrell Time Planner
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
*/
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
Bayrell.TimePlanner.Pattern = function(ctx)
{
	Runtime.Web.Component.apply(this, arguments);
};
Bayrell.TimePlanner.Pattern.prototype = Object.create(Runtime.Web.Component.prototype);
Bayrell.TimePlanner.Pattern.prototype.constructor = Bayrell.TimePlanner.Pattern;
Object.assign(Bayrell.TimePlanner.Pattern.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.Pattern)
		{
		}
		Runtime.Web.Component.prototype.assignObject.call(this,ctx,o);
	},
	assignValue: function(ctx,k,v)
	{
		Runtime.Web.Component.prototype.assignValue.call(this,ctx,k,v);
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
		return Runtime.Web.Component.prototype.takeValue.call(this,ctx,k,d);
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.Pattern";
	},
});
Object.assign(Bayrell.TimePlanner.Pattern, Runtime.Web.Component);
Object.assign(Bayrell.TimePlanner.Pattern,
{
	render: function(ctx, layout, model, params, content)
	{
		return (__control) =>
		{
			var __vnull = null;
			var __control_childs = [];
			
			/* Element 'html' */
			var __v0; var __v0_childs = [];
			[__v0, __control_childs] = RenderDriver.e(__control, __control_childs, "element", {"name": "html","attrs": {}});
			
			/* Element 'head' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "head","attrs": {}});
			
			/* Element 'title' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "title","attrs": {}});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": model.title});
			RenderDriver.p(__v2, __v2_childs);
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "link","attrs": {"rel":"shortcut icon","href":"data:image/x-icon;,","type":"image/x-icon"}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "link","attrs": {"rel":"stylesheet","href":model.route_prefix + Runtime.rtl.toStr("/core.css?_=") + Runtime.rtl.toStr(model.f_inc)}});
			
			/* Element 'style' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "style","attrs": {"id":"root_style"}});
			
			/* Raw */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "raw", {"content": Runtime.rs.spaceless(ctx, Runtime.Web.RenderDriver.getLayoutCSS(ctx, model))});
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v1, __v1_childs);
			
			/* Element 'body' */
			var __v1; var __v1_childs = [];
			[__v1, __v0_childs] = RenderDriver.e(__v0, __v0_childs, "element", {"name": "body","attrs": {}});
			
			var model_encoded = Runtime.rs.base64_encode_url(ctx, Runtime.rtl.json_encode(ctx, model));
			
			var frontend_storage = Runtime.rs.base64_encode_url(ctx, Runtime.rtl.json_encode(ctx, layout.frontend_storage));
			
			/* Element 'div' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "div","attrs": {"id":"root"}});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": content});
			RenderDriver.p(__v2, __v2_childs);
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "input","attrs": {"id":"root_model","type":"hidden","value":model_encoded}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "input","attrs": {"id":"frontend_storage","type":"hidden","value":frontend_storage}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "script","attrs": {"src":model.route_prefix + Runtime.rtl.toStr("/assets/runtime.js?_=") + Runtime.rtl.toStr(model.f_inc)}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "script","attrs": {"src":model.route_prefix + Runtime.rtl.toStr("/assets/components.js?_=") + Runtime.rtl.toStr(model.f_inc)}});
			
			[__vnull, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "script","attrs": {"src":model.route_prefix + Runtime.rtl.toStr("/app.js?_=") + Runtime.rtl.toStr(model.f_inc)}});
			
			/* Element 'script' */
			var __v2; var __v2_childs = [];
			[__v2, __v1_childs] = RenderDriver.e(__v1, __v1_childs, "element", {"name": "script","attrs": {}});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": "runWebApp("});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": this.json_encode(ctx, ctx.main_module)});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": ", "});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": this.json_encode(ctx, layout.frontend_env)});
			
			/* Text */
			[__vnull, __v2_childs] = RenderDriver.e(__v2, __v2_childs, "text", {"content": ");"});
			RenderDriver.p(__v2, __v2_childs);
			RenderDriver.p(__v1, __v1_childs);
			RenderDriver.p(__v0, __v0_childs);
			
			return __control_childs;
		};
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.Pattern";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.Pattern",
			"name": "Bayrell.TimePlanner.Pattern",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.Pattern);
window["Bayrell.TimePlanner.Pattern"] = Bayrell.TimePlanner.Pattern;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.Pattern;
"use strict;"
/*!
 *  Bayrell Time Planner
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
Bayrell.TimePlanner.Routes = function(ctx)
{
};
Object.assign(Bayrell.TimePlanner.Routes.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.Routes)
		{
		}
	},
	assignValue: function(ctx,k,v)
	{
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.Routes";
	},
});
Object.assign(Bayrell.TimePlanner.Routes,
{
	/**
	 * Layout chain
	 */
	layoutChain: function(ctx, layout)
	{
		if (layout.layout_name == "default")
		{
			layout = Runtime.rtl.setAttr(ctx, layout, Runtime.Collection.from(["layout_class"]), "Bayrell.TimePlanner.DefaultLayout");
		}
		if (layout.layout_name == "admin")
		{
			layout = Runtime.rtl.setAttr(ctx, layout, Runtime.Collection.from(["layout_class"]), "Bayrell.TimePlanner.AdminLayout");
		}
		return Runtime.Collection.from([layout]);
	},
	/**
	 * Render chain. Set default pattern
	 */
	renderChainPatternDefault: function(ctx, container)
	{
		if (container.pattern_name == "default" && container.pattern_class == "" || container.pattern_class == "")
		{
			container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["pattern_class"]), "Bayrell.TimePlanner.Pattern");
		}
		return Runtime.Collection.from([container]);
	},
	/**
	 * Render chain. Route after
	 */
	renderChainRouteAfter: function(ctx, container)
	{
		/* Change title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), container.layout.title + Runtime.rtl.toStr(" | BAYRELL Time Planner"));
		return Runtime.Collection.from([container]);
	},
	/**
	 * Render chain
	 * Page not found
	 * @return RenderContainer
	 */
	Page404: async function(ctx, container)
	{
		if (container == null || container.isResponseExists(ctx) || container.isPageExists(ctx))
		{
			return Promise.resolve(Runtime.Collection.from([container]));
		}
		/* Set title */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "title"]), "Page not found");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "default");
		/* Set model */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_class"]), "Bayrell.TimePlanner.Page404");
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "page_model"]), null);
		/* Set 404 code */
		container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["new_http_code"]), 404);
		/* Get auth token */
		var __v0 = new Runtime.Monad(ctx, Runtime.rtl.get(ctx, container.layout.keep_data, "Runtime.Web.Auth.AuthToken"));
		__v0 = __v0.monad(ctx, Runtime.rtl.m_to(ctx, "Runtime.Web.Auth.AuthToken", null));
		var auth_token = __v0.value(ctx);
		if (auth_token)
		{
			container = Runtime.rtl.setAttr(ctx, container, Runtime.Collection.from(["layout", "layout_name"]), "admin");
		}
		return Promise.resolve(Runtime.Collection.from([container]));
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.Routes";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.Routes",
			"name": "Bayrell.TimePlanner.Routes",
			"annotations": Collection.from([
				new Runtime.Web.RouteList(ctx, Runtime.Dict.from({})),
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.Routes);
window["Bayrell.TimePlanner.Routes"] = Bayrell.TimePlanner.Routes;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.Routes;
"use strict;"
/*!
 *  Bayrell Time Planner
 *
 *  (c) Copyright 2020 "Ildar Bikmamatov" <support@bayrell.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
if (typeof Bayrell == 'undefined') Bayrell = {};
if (typeof Bayrell.TimePlanner == 'undefined') Bayrell.TimePlanner = {};
Bayrell.TimePlanner.ModuleDescription = function(ctx)
{
};
Object.assign(Bayrell.TimePlanner.ModuleDescription.prototype,
{
	assignObject: function(ctx,o)
	{
		if (o instanceof Bayrell.TimePlanner.ModuleDescription)
		{
		}
	},
	assignValue: function(ctx,k,v)
	{
	},
	takeValue: function(ctx,k,d)
	{
		if (d == undefined) d = null;
	},
	getClassName: function(ctx)
	{
		return "Bayrell.TimePlanner.ModuleDescription";
	},
});
Object.assign(Bayrell.TimePlanner.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function(ctx)
	{
		return "Bayrell.TimePlanner";
	},
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleVersion: function(ctx)
	{
		return "0.1.0";
	},
	/**
	 * Returns required modules
	 * @return Dict<string>
	 */
	requiredModules: function(ctx)
	{
		return Runtime.Dict.from({"Runtime":">=0.3","Runtime.Web":"*","Runtime.Web.Auth":"*","Runtime.Web.CRUD":"*"});
	},
	/**
	 * Returns enities
	 */
	entities: function(ctx)
	{
		return Runtime.Collection.from([new Runtime.Core.Driver(ctx, Runtime.Dict.from({"name":"root-controller","value":"Runtime.Web.RenderController","params":Runtime.Dict.from({"selector":"#root","main_controller":true,"window":"RootController"})})),new Runtime.Core.LambdaChain(ctx, Runtime.Dict.from({"name":Runtime.Web.RenderDriver.LAYOUT_CHAIN,"pos":10,"value":"Bayrell.TimePlanner.Routes::layoutChain"})),new Runtime.Core.LambdaChain(ctx, Runtime.Dict.from({"name":Runtime.Web.RenderDriver.RENDER_CHAIN,"value":"Bayrell.TimePlanner.Routes::Page404","pos":Runtime.Web.RenderDriver.RENDER_CHAIN_CALL_PAGE_NOT_FOUND,"is_async":true})),new Runtime.Core.LambdaChain(ctx, Runtime.Dict.from({"name":Runtime.Web.RenderDriver.RENDER_CHAIN,"value":"Bayrell.TimePlanner.Routes::renderChainRouteAfter","pos":Runtime.Web.RenderDriver.RENDER_CHAIN_CALL_ROUTE_AFTER,"is_async":true})),new Runtime.Web.RouteList(ctx, Runtime.Dict.from({"name":"Bayrell.TimePlanner.Admin.AdminInfo"})),new Runtime.Web.RouteList(ctx, Runtime.Dict.from({"name":"Bayrell.TimePlanner.Admin.AdminProjects"})),new Runtime.Web.RouteList(ctx, Runtime.Dict.from({"name":"Bayrell.TimePlanner.Tasks.TasksPage"})),new Runtime.Web.RouteList(ctx, Runtime.Dict.from({"name":"Bayrell.TimePlanner.MainPage"}))]);
	},
	/**
	 * Returns context settings
	 * @return Dict<string>
	 */
	appSettings: function(ctx, env)
	{
		return Runtime.Dict.from({"config":Runtime.Dict.from({"Runtime.Web":Runtime.Dict.from({"f_inc":"1"})})});
	},
	/**
	 * Init app
	 */
	appInit: function(ctx, c)
	{
		return c.constructor.init(ctx, c);
	},
	/**
	 * Start app
	 */
	appStart: async function(ctx, c)
	{
		return Promise.resolve(await c.constructor.start(ctx, c));
	},
	/**
	 * Run app
	 */
	appRun: async function(ctx)
	{
		var controller = ctx.getDriver(ctx, "Runtime.Web.RouteController");
		await controller.renderFirst(ctx);
	},
	/* ======================= Class Init Functions ======================= */
	getCurrentNamespace: function()
	{
		return "Bayrell.TimePlanner";
	},
	getCurrentClassName: function()
	{
		return "Bayrell.TimePlanner.ModuleDescription";
	},
	getParentClassName: function()
	{
		return "";
	},
	getClassInfo: function(ctx)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return new IntrospectionInfo(ctx, {
			"kind": IntrospectionInfo.ITEM_CLASS,
			"class_name": "Bayrell.TimePlanner.ModuleDescription",
			"name": "Bayrell.TimePlanner.ModuleDescription",
			"annotations": Collection.from([
			]),
		});
	},
	getFieldsList: function(ctx, f)
	{
		var a = [];
		if (f==undefined) f=0;
		return Runtime.Collection.from(a);
	},
	getFieldInfoByName: function(ctx,field_name)
	{
		var Collection = Runtime.Collection;
		var Dict = Runtime.Dict;
		var IntrospectionInfo = Runtime.IntrospectionInfo;
		return null;
	},
	getMethodsList: function(ctx)
	{
		var a = [
			"appRun",
		];
		return Runtime.Collection.from(a);
	},
	getMethodInfoByName: function(ctx,field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(Bayrell.TimePlanner.ModuleDescription);
window["Bayrell.TimePlanner.ModuleDescription"] = Bayrell.TimePlanner.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = Bayrell.TimePlanner.ModuleDescription;