<?php
/** .-------------------------------------------------------------------
 * |  Software: [HDCMS framework]
 * |      Site: www.hdcms.com
 * |-------------------------------------------------------------------
 * |    Author: 向军 <2300071698@qq.com>
 * |    WeChat: aihoudun
 * | Copyright (c) 2012-2019, www.houdunwang.com. All Rights Reserved.
 * '-------------------------------------------------------------------*/
namespace hdphp\crypt;

use hdphp\kernel\ServiceProvider;

class CryptProvider extends ServiceProvider {

	//延迟加载
	public $defer = true;

	public function boot() {
		\Crypt::setSecureKey( c( 'app.key' ) );
	}

	public function register() {
		$this->app->single( 'Crypt', function ( $app ) {
			return new Crypt( $app );
		} );
	}
}