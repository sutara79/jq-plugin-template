<?php
use PHPUnit\Framework\TestCase;
use myapp\DbController;

/**
 * @coversDefaultClass myapp\DbController
 */
final class DbControllerTest extends TestCase
{
    /**
     * @covers ::getInfo
     */
    public function testCanBeCreatedFromUserInput()
    {
        $this->assertEquals(
            'Hello-processed',
            DbController::getInfo('Hello')
        );
    }
}
