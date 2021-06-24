<?php namespace Addons\Base;

/** .-------------------------------------------------------------------
 * |  Software: [HDPHP framework, HDCMS]
 * |      Site: www.hdphp.com www.hdcms.com
 * |-------------------------------------------------------------------
 * |    Author: 向军 <2300071698@qq.com>
 * |    Video : www.houdunren.com
 * |    WeChat: aihoudun
 * | Copyright (c) 2012-2019, www.houdunwang.com. All Rights Reserved.
 * '-------------------------------------------------------------------*/

use Addons\Base\Model\BaseSystemModel;
use Addons\Module;

/**
 * 后台访问处理类
 * Class Site
 * @package Addons\base
 */
class Site extends Module {
	//系统回复设置
	public function system() {
		if ( IS_POST ) {
			$this->store( new BaseSystemModel(), I( 'post.' ) );
		}
		$field = ( new BaseSystemModel() )->find( 1 );
		$this->assign( 'field', $field );
		$this->make();
	}
}