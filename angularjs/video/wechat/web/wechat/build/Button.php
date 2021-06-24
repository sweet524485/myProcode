<?php namespace wechat\build;

use wechat\Wx;

/**
 * 微信按钮管理
 * Class Button
 * @package wechat\build
 */
class Button extends Wx {
	/**
	 * 创建按钮
	 *
	 * @param string $data
	 *
	 * @return mixed
	 */
	public function create( $data ) {
		$url    = $this->apiUrl . '/cgi-bin/menu/create?access_token=' . $this->getAccessToken();
		$result = $this->curl( $url, $data );

		return $this->get( json_decode( $result, true ) );
	}

	//删除当前使用的按钮
	public function flush() {
		$url    = $this->apiUrl . '/cgi-bin/menu/delete?access_token=' . $this->getAccessToken();
		$result = $this->curl( $url );

		return $this->get( $result );
	}
}











