<?php
Class IndexAction extends Action {
	//首页视图
	public function index(){
		//p($_GET); die;
		//echo U('show',array('uid'=>1),'',0,true);die;
		//查询出所有数据
		$wish = M('wish')->select();
		//p($wish);
		//$this->assign('a',111);
		//$this->a = 111;
		//把查询出的数据分配给变量
		$this->assign('wishData',$wish);
		//在模板中显示数据
		$this->display('wish');
	}
	/*public function show(){
		//p($_GET);
		//echo THINK_VERSION;
		echo I('uid');
	}*/
	//表单处理
	public function handle(){
		//p($_POST);
		//echo I('username');
		//var_dump(IS_POST);
		if(!IS_POST){
			_404('页面不存在！',U('index'));
		}else{
			$data = array(
				'username' => I('username'),
				'content' => I('content'),
				'time' => time()
			);
			//p($data);
			//$result = M('wish')->where(array('id' => array('gt',0)))->delete();
			//var_dump($result);die;
			if(M('wish')->data($data)->add()){
				$this->success('发布成功','index');
			}else{
				$this->error('发布失败，请重试...');
			}
		}
	}
}
?>