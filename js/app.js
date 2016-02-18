var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog){

  // Toolbar search toggle
  $scope.toggleSearch = function(element) {
    $scope.showSearch = !$scope.showSearch;
  };

  // Sidenav toggle
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  // Menu items
 	$scope.menu = [
    {
      link : '',
      title: 'Dashboard',
      icon: 'action:ic_dashboard_24px' // we have to use Google's naming convention for the IDs of the SVGs in the spritesheet
    },
    {
      link : '',
      title: 'Friends',
      icon: 'social:ic_group_24px'
    },
    {
      link : '',
      title: 'Messages',
      icon: 'communication:ic_message_24px'
    }
  ];
  $scope.admin = [
    {
      link : '',
      title: 'Trash',
      icon: 'action:ic_delete_24px'
    },
    {
      link : 'showListBottomSheet($event)',
      title: 'Settings',
      icon: 'action:ic_settings_24px'
    }
  ];

  // App items
 	$scope.apps = [
    {
      link : '',
      title: 'Workload',
      desc: 'App description goes here',
      icon: 'action:ic_donut_large_24px'
    },
    {
      link : '',
      title: 'Memberships',
      desc: 'App description goes here',
      icon: 'action:ic_card_membership_24px'
    },
    {
      link : '',
      title: 'Transactions',
      desc: 'App description goes here',
      icon: 'action:ic_shopping_cart_24px'
    },
    {
      link : '',
      title: 'Categories',
      desc: 'App description goes here',
      icon: 'device:ic_storage_24px'
    },
    {
      link : '',
      title: 'Geographics',
      desc: 'App description goes here',
      icon: 'maps:ic_place_24px'
    },
    {
      link : '',
      title: 'Business',
      desc: 'App description goes here',
      icon: 'action:ic_store_24px'
    },
    {
      link : '',
      title: 'Financials',
      desc: 'App description goes here',
      icon: 'editor:ic_attach_money_24px'
    },
    {
      link : '',
      title: 'VP Dashboard',
      desc: 'App description goes here',
      icon: 'action:ic_dashboard_24px'
    },
    {
      link : '',
      title: 'Inventory',
      desc: 'App description goes here',
      icon: 'editor:ic_format_list_numbered_24px'
    },
    {
      link : '',
      title: 'Employees',
      desc: 'App description goes here',
      icon: 'action:ic_perm_identity_24px'
    }
  ];

  // Mock attributes
  $scope.attributes = [
      {
        title: 'Owner',
        value: 'Scott Alexander',
        icon: 'action:ic_assignment_ind_24px'
      },
      {
        title: 'Last updated',
        value: 'Dec 12, 2015',
        icon: 'action:ic_today_24px'
      },
      {
        title: 'DNS',
        value: 'https://appname-environment.company.com:8080',
        icon: 'action:ic_dns_24px'
      },
      {
        title: 'Version',
        value: '02.08.10.02',
        icon: 'action:ic_fingerprint_24px'
      },
    ];

  // Bottomsheet & Modal Dialogs
  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header"><md-list><md-list-item class="md-2-line" ng-repeat="item in items" role="link" md-ink-ripple><md-icon md-svg-icon="{{item.icon}}" aria-label="{{item.name}}"></md-icon><div class="md-list-item-text"><h3>{{item.name}}</h3></div></md-list-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };

  $scope.autocomplete = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      template: `
      <md-dialog aria-label="App" class="md-dialog-lg">
        <md-toolbar class="md-tall bgc-red-900">
          <div layout="row">
            <md-button class="md-icon-button" ng-click="cancel()">
              <md-icon md-svg-icon="navigation:ic_arrow_back_24px" alt="Back"></md-icon>
            </md-button>
            <span flex=""></span>
            <md-icon flex="30" class="md-icon-xl pull-bottom-lg md-muted" md-svg-icon="core:assessment" alt="Icon"></md-icon>
          </div>
          <div class="md-toolbar-tools pull-top-xxl">
            <span flex-gt-sm="10"></span>
            <div layout="column">
              <div class="md-display-1">Aster Analytics</div>
              <div class="md-subhead push-bottom">Etiam consequat aliquam cursus. In sodales pretium ultrices.</div>
            </div>
          </div>
          <md-button class="md-fab md-fab md-accent md-fab-bottom-right md-whiteframe-z2 pull-bottom-sm" ui-sref="app-create" ng-click="cancel()">
            <md-icon md-svg-icon="core:cloud-download" alt="Icon"></md-icon>
            <md-tooltip md-direction="left">Install App</md-tooltip>
          </md-button>
        </md-toolbar>
         <md-dialog-content class="bgc-grey-100" flex>
           <div hide-sm class="push-top-md"></div>
           <div layout-gt-sm="row" layout-align-gt-sm="center start">
             <div layout-gt-sm="row" flex-gt-sm="85">
               <div flex-gt-sm="65">
                 <md-card>
                   <md-card-content>
                     <p>Sticky content conversions shoptimization lean content conversation marketing dashboard Gen Y. Wheelhouse virality engagement. Integrated crowdsource flat design. Blogosphere The Cloud leverage. Download phablet brand awareness robust buzzword. Reaching out inbound drone. Seed money pass the clap organic reach goals for engagement verticals wheelhouse. Buzz engagement crowdsource intuitive reaching out lean content scalability.</p>
                     <p>User-friendly lean content multiple points of entry drone taste makers dedication synergies. Quiet period virality council crowdsource lean content. Blogosphere long-tail omnichannel. Inbound B2C big data. Learnings ROI target influencer snackable content. Intuitive flat design branding leading the pack seamless.</p>
                     <p>Ideation click bait optimized for social sharing. Branding seamless reaching out cross-device goals for engagement target audience organic reach. Multiple points of entry conversions B2C cross-device hashtag CRM meme. Funnel wheelhouse content curation market share viral CRM. Call-to-action low hanging fruit phablet engagement target audience. B2B pivot quiet period synergies. Call-to-action granular B2B virality low hanging fruit learnings target audience. Brand awareness pivot alignment leverage holistic. Buzzword disruptive tech shoptimization optimized for social sharing scalability crowdsource.</p>
                   </md-card-content>
                   <div layout="row" layout-align="start center" class="inset">
                     <md-button class="md-raised md-accent" ui-sref="app-create" ng-click="controller.cancel()">Install App</md-button>
                     <md-button class="md-raised">View Github Repo</md-button>
                   </div>
                 </md-card>
               </div>
               <div flex-gt-sm="35">
                 <md-card>
                   <md-list>
                     <md-subheader class="md-no-sticky md-transparent">Required Resources</md-subheader>
                     <md-list-item class="md-2-line">
                       <md-icon md-svg-icon="core:view-module" alt="Icon" class="md-avatar"></md-icon>
                       <div class="md-list-item-text">
                         <h3>12</h3>
                         <p>CPUs</p>
                       </div>
                     </md-list-item>
                     <md-list-item class="md-2-line">
                       <md-icon md-svg-icon="image:center-focus-weak" alt="Icon" class="md-avatar"></md-icon>
                       <div class="md-list-item-text">
                         <h3>24576</h3>
                         <p>Memory</p>
                       </div>
                     </md-list-item>
                     <md-list-item class="md-2-line">
                       <md-icon md-svg-icon="core:settings-input-component" alt="Icon" class="md-avatar"></md-icon>
                       <div class="md-list-item-text">
                         <h3>409600</h3>
                         <p>Disk</p>
                       </div>
                     </md-list-item>
                     <md-list-item class="md-2-line">
                       <md-icon md-svg-icon="core:settings-input-hdmi" alt="Icon" class="md-avatar"></md-icon>
                       <div class="md-list-item-text">
                         <h3>100</h3>
                         <p>Ports</p>
                       </div>
                     </md-list-item>
                     <md-divider></md-divider>
                     <md-subheader class="md-no-sticky md-transparent">Info</md-subheader>
                     <md-list-item class="md-2-line">
                       <md-icon md-svg-icon="core:folder" alt="Icon" class="md-avatar"></md-icon>
                       <div class="md-list-item-text">
                         <h3>Analytics</h3>
                         <p>Category</p>
                       </div>
                     </md-list-item>
                     <md-list-item class="md-2-line">
                       <md-icon md-svg-icon="core:today" alt="Icon" class="md-avatar"></md-icon>
                       <div class="md-list-item-text">
                         <h3>Jan 20, 2015</h3>
                         <p>Last Updated</p>
                       </div>
                     </md-list-item>
                     <md-divider></md-divider>
                     <md-subheader class="md-no-sticky md-transparent">Creator</md-subheader>
                     <md-list-item class="md-2-line">
                       <md-icon md-svg-icon="core:account-box" alt="Icon" class="md-avatar"></md-icon>
                       <div class="md-list-item-text">
                         <h3>Johnny Ringo</h3>
                         <p>owner</p>
                       </div>
                     </md-list-item>
                   </md-list>
                 </md-card>
               </div>
             </div>
           </div>
        </md-dialog-content>
      </md-dialog>
      `,
      targetEvent: ev,
    });
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
}]);

app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'social:ic_share_24px' },
    { name: 'Upload', icon: 'file:ic_cloud_upload_24px' },
    { name: 'Copy', icon: 'content:ic_content_copy_24px' },
    { name: 'Print this page', icon: 'action:ic_print_24px' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};

app.controller('DemoCtrl', DemoCtrl);
  function DemoCtrl ($timeout, $q) {
    var self = this;
    // list of `state` value/display objects
    self.states        = loadAll();
    self.selectedItem  = null;
    self.searchText    = null;
    self.querySearch   = querySearch;
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : [];
      return results;
    }
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Ali Conners, Alex, Scott, Jennifer, \
              Sandra Adams, Brian Holt, \
              Trevor Hansen';
      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };
    }
  };

app.config(function($mdThemingProvider) {
  var customBlueMap = 		$mdThemingProvider.extendPalette('blue-grey', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('teal');
  $mdThemingProvider.theme('input', 'default')
    .primaryPalette('grey')
});

app.config(function($mdIconProvider) {
  $mdIconProvider
    // linking to https://github.com/google/material-design-icons/tree/master/sprites/svg-sprite
    .iconSet('action', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-action.svg', 24)
    .iconSet('alert', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-alert.svg', 24)
    .iconSet('av', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-av.svg', 24)
    .iconSet('communication', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-communication.svg', 24)
    .iconSet('content', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-content.svg', 24)
    .iconSet('device', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-device.svg', 24)
    .iconSet('editor', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-editor.svg', 24)
    .iconSet('file', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-file.svg', 24)
    .iconSet('hardware', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-hardware.svg', 24)
    .iconSet('image', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-image.svg', 24)
    .iconSet('maps', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-maps.svg', 24)
    .iconSet('navigation', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-navigation.svg', 24)
    .iconSet('notification', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-notification.svg', 24)
    .iconSet('social', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-social.svg', 24)
    .iconSet('toggle', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-toggle.svg', 24)

    // Illustrated user icons used in the docs https://material.angularjs.org/latest/#/demo/material.components.gridList
    .iconSet('avatars', 'https://raw.githubusercontent.com/angular/material/master/docs/app/icons/avatar-icons.svg', 24)
    .defaultIconSet('https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-action.svg', 24);
});

app.directive('backButton', function($window) {
  return {
    restrict: 'A',
    link: function(scope, elem) {
      elem.bind('click', function() {
        $window.history.back();
      });
    }
  };
});
