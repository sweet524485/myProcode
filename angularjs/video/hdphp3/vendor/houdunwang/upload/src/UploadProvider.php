<?php namespace houdunwang\upload;

/** .-------------------------------------------------------------------
 * |  Software: [HDCMS framework]
 * |      Site: www.hdcms.com
 * |-------------------------------------------------------------------
 * |    Author: 向军 <2300071698@qq.com>
 * |    WeChat: aihoudun
 * | Copyright (c) 2012-2019, www.houdunwang.com. All Rights Reserved.
 * '-------------------------------------------------------------------*/

use hdphp\kernel\ServiceProvider;

class UploadProvider extends ServiceProvider {

	//延迟加载
	public $defer = true;

	public function boot() {
		\Upload::init( c( 'upload' ) );
	}

	public function register() {
		$this->app->single( 'Upload', function ( $app ) {
			return new Upload( $app );
		} );
	}
}