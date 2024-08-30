import { createRouter, createWebHashHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import WebLayout from "@/layouts/WebLayout.vue";
import NotFoundView from "@/views/NotFound.vue";

const routeComponents = {
  MainLayout,
  WebLayout,
  HomeView: () => import("@/views/web/Home.vue"),
  LoginView: () => import("@/views/auth/Login.vue"),
  RegisterView: () => import("@/views/auth/Register.vue"),
  ResetPasswordView: () => import("@/views/auth/ResetPassword.vue"),
  DashboardView: () => import("@/views/main/dashboard/Dashboard.vue"),
  WebEventsView: () => import("@/views/web/WebEvents.vue"),
  WebEventView: () => import("@/views/web/WebEvent.vue"),

  EventsView: () => import("@/views/main/events/Events.vue"),
  AddEventView: () => import("@/views/main/events/Add.vue"),
  EventView: () => import("@/views/main/events/Event.vue"),
  EditEventView: () => import("@/views/main/events/Edit.vue"),
  AccessEventView: () => import("@/views/main/events/AccessEvent.vue"),

  ParticipantsView: () => import("@/views/main/participants/Participants.vue"),
  AddParticipantView: () => import("@/views/main/participants/Add.vue"),
  ParticipantView: () => import("@/views/main/participants/Participant.vue"),
  EditParticipantView: () => import("@/views/main/participants/Edit.vue"),

  ConfigurationsView: () =>
    import("@/views/main/configurations/Configurations.vue"),
  ContactsView: () => import("@/views/main/configurations/Contacts.vue"),

  UsersView: () => import("@/views/main/configurations/users/Users.vue"),
  AddUserView: () => import("@/views/main/configurations/users/Add.vue"),
  UserView: () => import("@/views/main/configurations/users/User.vue"),
  EditUserView: () => import("@/views/main/configurations/users/Edit.vue"),

  RolesView: () => import("@/views/main/configurations/roles/Roles.vue"),
  AddRoleView: () => import("@/views/main/configurations/roles/Add.vue"),
  RoleView: () => import("@/views/main/configurations/roles/Role.vue"),
  EditRoleView: () => import("@/views/main/configurations/roles/Edit.vue"),

  EventTypesView: () =>
    import("@/views/main/configurations/event-types/EventTypes.vue"),
  AddEventTypeView: () =>
    import("@/views/main/configurations/event-types/Add.vue"),
  EditEventTypeView: () =>
    import("@/views/main/configurations/event-types/Edit.vue"),

  OrganisersView: () =>
    import("@/views/main/configurations/organisers/Organisers.vue"),
  AddOrganiserView: () =>
    import("@/views/main/configurations/organisers/Add.vue"),
  EditOrganiserView: () =>
    import("@/views/main/configurations/organisers/Edit.vue"),

  MyProfileView: () =>
    import("@/views/main/configurations/users/MyProfile.vue"),
  EditProfileView: () =>
    import("@/views/main/configurations/users/EditProfile.vue"),
};

// Define your route configurations
const routes = [
  {
    path: "/",
    component: routeComponents.WebLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: routeComponents.HomeView,
        props: true,
      },
      {
        path: "/login",
        name: "Login",
        component: routeComponents.LoginView,
      },
      {
        path: "/register",
        name: "Register",
        component: routeComponents.RegisterView,
      },
      {
        path: "/reset-password",
        name: "ResetPassword",
        component: routeComponents.ResetPasswordView,
      },
      {
        path: "/web-events",
        name: "WebEvents",
        component: routeComponents.WebEventsView,
      },
      {
        path: "/web-event/:id",
        name: "WebEvent",
        component: routeComponents.WebEventView,
      },
    ],
  },
  {
    path: "/",
    name: "Main",
    component: routeComponents.MainLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: routeComponents.DashboardView,
      },

      {
        path: "/events",
        name: "Events",
        component: routeComponents.EventsView,
      },

      {
        path: "/add-event",
        name: "AddEvent",
        component: routeComponents.AddEventView,
      },

      {
        path: "/event/:id",
        name: "Event",
        component: routeComponents.EventView,
      },

      {
        path: "/edit-event/:id",
        name: "EditEvent",
        component: routeComponents.EditEventView,
      },

      {
        path: "/access-event/:id",
        name: "AccessEvent",
        component: routeComponents.AccessEventView,
      },

      {
        path: "/participants",
        name: "Participants",
        component: routeComponents.ParticipantsView,
      },

      {
        path: "/add-participant",
        name: "AddParticipant",
        component: routeComponents.AddParticipantView,
      },

      {
        path: "/participant/:id",
        name: "Participant",
        component: routeComponents.ParticipantView,
      },

      {
        path: "/edit-participant/:id",
        name: "EditParticipant",
        component: routeComponents.EditParticipantView,
      },

      {
        path: "/users",
        name: "Users",
        component: routeComponents.UsersView,
      },

      {
        path: "/add-user",
        name: "AddUser",
        component: routeComponents.AddUserView,
      },

      {
        path: "/user/:id",
        name: "User",
        component: routeComponents.UserView,
      },

      {
        path: "/my-profile/:id",
        name: "MyProfile",
        component: routeComponents.MyProfileView,
      },

      {
        path: "/edit-profile/:id",
        name: "EditProfile",
        component: routeComponents.EditProfileView,
      },

      {
        path: "/edit-user/:id",
        name: "EditUser",
        component: routeComponents.EditUserView,
      },

      {
        path: "/roles",
        name: "Roles",
        component: routeComponents.RolesView,
      },

      {
        path: "/add-role",
        name: "AddRole",
        component: routeComponents.AddRoleView,
      },

      {
        path: "/role/:id",
        name: "Role",
        component: routeComponents.RoleView,
      },

      {
        path: "/edit-role/:id",
        name: "EditRole",
        component: routeComponents.EditRoleView,
      },

      {
        path: "/configurations",
        name: "Configurations",
        component: routeComponents.ConfigurationsView,
      },

      {
        path: "/contacts",
        name: "Contacts",
        component: routeComponents.ContactsView,
      },

      {
        path: "/event-types",
        name: "EventTypes",
        component: routeComponents.EventTypesView,
      },

      {
        path: "/add-event-type",
        name: "AddEventType",
        component: routeComponents.AddEventTypeView,
      },

      {
        path: "/edit-event-type/:id",
        name: "EditEventType",
        component: routeComponents.EditEventTypeView,
      },

      {
        path: "/organisers",
        name: "Organisers",
        component: routeComponents.OrganisersView,
      },

      {
        path: "/add-organiser",
        name: "AddOrganiser",
        component: routeComponents.AddOrganiserView,
      },

      {
        path: "/edit-organiser/:id",
        name: "EditOrganiser",
        component: routeComponents.EditOrganiserView,
      },
    ],
  },
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFoundView },
];

// Create the router instance
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
