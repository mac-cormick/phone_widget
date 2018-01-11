define(['jquery'], function($){
    var CustomWidget = function () {
    	var self = this;
		this.callbacks = {
			render: function(){
				return true;
			},
			init: function(){
				self.add_action('phone', function(data) {
					self.crm.post (
						'http://127.0.0.1/file.php',
						{
							call_to: data.value
						},
						function (msg) {
							alert('Данные отправлены')ж
						},
						'text',
						function() {
							alert('Error');
						}
					);
				});
			},
			bind_actions: function(){
				return true;
			},
			settings: function(){
				return true;
			},
			onSave: function(){
				alert('click');
				return true;
			},
			destroy: function(){

			},
			contacts: {
					//select contacts in list and clicked on widget name
					selected: function(){
						console.log('contacts');
					}
				},
			leads: {
					//select leads in list and clicked on widget name
					selected: function(){
						console.log('leads');
					}
				},
			tasks: {
					//select taks in list and clicked on widget name
					selected: function(){
						console.log('tasks');
					}
				}
		};
		return this;
    };

return CustomWidget;
});
