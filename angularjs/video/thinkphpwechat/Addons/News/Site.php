<?php namespace Addons\News;

/** .-------------------------------------------------------------------
 * |  Software: [HDPHP framework, HDCMS]
 * |      Site: www.hdphp.com www.hdcms.com
 * |-------------------------------------------------------------------
 * |    Author: 向军 <2300071698@qq.com>
 * |    Video : www.houdunren.com
 * |    WeChat: aihoudun
 * | Copyright (c) 2012-2019, www.houdunwang.com. All Rights Reserved.
 * '-------------------------------------------------------------------*/

use Addons\Module;
use Addons\News\Model\ArticleModel;
use Addons\News\Model\CategoryModel;

/**
 * 后台访问处理类
 * Class Site
 * @package Addons\News
 */
class Site extends Module {
	//栏目列表
	public function category() {
		$model = new CategoryModel();
		$data  = $model->select();
		$this->assign( 'data', $data );
		$this->make();
	}

	//添加栏目
	public function categoryPost() {
		if ( IS_POST ) {
			$data = I( 'post.' );
			$this->store( new CategoryModel(), $data, function () {
				$this->success( '保存成功', site_url( 'news.category' ) );
				exit;
			} );
		}
		$this->make();
	}

	public function article() {
		$model = new ArticleModel();
		$data  = $model->select();
		$this->assign( 'data', $data );
		$this->make();
	}

	//添加文章
	public function articlePost() {
		if ( IS_POST ) {
			$data = I( 'post.' );
			$this->store( new ArticleModel(), $data, function () {
				$this->success( '保存成功', site_url( 'news.article' ) );
				exit;
			} );
		}
		$this->make();
	}

	//删除文章
	public function articleRemove() {
		$id    = I( 'get.id' );
		$model = new ArticleModel();
		if ( $model->delete( $id ) ) {
			$this->success( '删除成功' ,site_url('news.article'));;exit;
		} else {
			$this->error( '删除失败' );
		}
	}
}













